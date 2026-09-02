# Theory Forge

> Status: in development · personal project
> Repository: [Ghigog/lol-theory](https://github.com/Ghigog/lol-theory)
> · public · React 19 + Vite · last commit 1 June 2026

A browser tool for testing League of Legends champion builds: combine items
and levels, and see the resulting stats.

## Where the numbers come from

Champion data comes from **Meraki Analytics** rather than Riot's Data
Dragon, because Data Dragon no longer publishes ability damage
coefficients. Items and images still come from Data Dragon, so they stay
accurate to the patch.

Level scaling uses Riot's own back-loaded growth formula rather than a
linear approximation:

```
stat = base + growth × n × (0.7025 + 0.0175 × n)
```

## The shop

Search, categories, drag-and-drop, and double-tap to add.

## State

It runs, but there is no deployed build, no release, and no commits since
1 June 2026.

> Almost all the logic is in one file: `App.jsx` is 69KB, and the README
> puts about 95% of the project there. That is the first thing to fix if it
> comes off the shelf. The README also links its own docs by absolute
> `file:///Users/dylangrowcoot/` paths.
