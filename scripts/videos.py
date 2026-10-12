#!/usr/bin/env python3
"""Index the videos in every assets/<Project>/video/ folder.

Drop MP4s into a project's video folder, then run from the repository root:

    python3 scripts/videos.py

Files that differ only by a trailing " (1)", " (2)"... are one video cut to
different shapes, e.g. "Board Merge.mp4" (square) and "Board Merge (1).mp4"
(vertical). For each folder this writes videos.json, listing every video with
its cuts and their sizes, and, if ffmpeg is installed, a poster frame
(<name>.jpg) next to each cut. js/main.js reads that list for any sheet
carrying data-videos="<folder>":

  - the first video is the project's cover. The card on the home page plays
    the cut that best fits the tile's current shape; the sheet plays the cut
    that best fits the screen.
  - every other video goes behind a "More videos" button on the sheet, each
    shown in the cut that best fits the screen.

Order in videos.json is kept between runs and new videos are added at the
end, so reorder the list by hand to choose the cover.
Standard library only (ffmpeg is optional, for posters).
"""

import json
import re
import shutil
import struct
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTAINERS = {b"moov", b"trak", b"mdia", b"minf", b"stbl"}


def boxes(data, start, end):
    """Yield (type, payload_start, payload_end) for each MP4 box in a range."""
    i = start
    while i + 8 <= end:
        size, kind = struct.unpack(">I4s", data[i:i + 8])
        header = 8
        if size == 1:
            size = struct.unpack(">Q", data[i + 8:i + 16])[0]
            header = 16
        elif size == 0:
            size = end - i
        if size < header:
            return
        yield kind, i + header, min(i + size, end)
        i += size


def video_size(path):
    """(width, height) as displayed, from the video track's tkhd box."""
    data = path.read_bytes()
    best = None

    def walk(start, end):
        nonlocal best
        for kind, a, b in boxes(data, start, end):
            if kind in CONTAINERS:
                walk(a, b)
            elif kind == b"tkhd":
                version = data[a]
                matrix = a + (52 if version == 1 else 40)
                w, h = struct.unpack(">II", data[b - 8:b])
                w, h = w >> 16, h >> 16
                if not (w and h):
                    continue
                # A 90 or 270 degree rotation matrix swaps the displayed shape.
                ma, mb = struct.unpack(">ii", data[matrix:matrix + 8])
                if ma == 0 and mb != 0:
                    w, h = h, w
                if best is None or w * h > best[0] * best[1]:
                    best = (w, h)

    walk(0, len(data))
    return best


def poster(video):
    """Write <name>.jpg from the first second of the video, if ffmpeg exists."""
    out = video.with_suffix(".jpg")
    if out.exists() and out.stat().st_mtime >= video.stat().st_mtime:
        return out.name
    if not shutil.which("ffmpeg"):
        return None
    subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-y", "-ss", "0.5", "-i", str(video),
         "-frames:v", "1", "-vf", "scale='min(1280,iw)':-2", "-q:v", "4", str(out)],
        check=True,
    )
    return out.name


def group_of(name):
    """("Board Merge", title) for "Social Board Merge (2).mp4"."""
    stem = re.sub(r"\s*\(\d+\)$", "", Path(name).stem).strip()
    title = re.sub(r"^(social\s+)?(\d+\s*-\s*)?", "", stem, flags=re.I).strip()
    return stem, title or stem


def index(folder):
    manifest = folder / "videos.json"
    previous = []
    if manifest.exists():
        previous = [v["key"] for v in json.loads(manifest.read_text())["videos"] if "key" in v]

    groups = {}
    for path in sorted(folder.glob("*.mp4")):
        size = video_size(path)
        if not size:
            print(f"  skipped {path.name}: no video track found", file=sys.stderr)
            continue
        key, title = group_of(path.name)
        cut = {"src": path.name, "width": size[0], "height": size[1]}
        still = poster(path)
        if still:
            cut["poster"] = still
        groups.setdefault(key, {"key": key, "title": title, "cuts": []})["cuts"].append(cut)

    order = [k for k in previous if k in groups]
    order += sorted(k for k in groups if k not in order)
    videos = [groups[k] for k in order]

    manifest.write_text(json.dumps({"videos": videos}, indent=2) + "\n")
    print(f"{manifest.relative_to(ROOT)}: {len(videos)} videos")
    for v in videos:
        cuts = ", ".join(f"{c['width']}x{c['height']}" for c in v["cuts"])
        print(f"  {v['title']}: {cuts}")


def main():
    folders = sorted(ROOT.glob("assets/*/video"))
    if not folders:
        print("No assets/<Project>/video/ folders found.")
    for folder in folders:
        index(folder)


if __name__ == "__main__":
    main()
