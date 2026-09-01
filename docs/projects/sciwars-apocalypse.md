# SciWars: Apocalypse

> Status: in development · design doc · created 15 July 2024
> Source: Notion, *Projects → Design Docs → SciWars: Apocalypse*.

**Premise:**

Aliens secretly came to Earth and turned the World’s branches of science against each other, plunging humanity into a technological apocalypse.

Now you must collect members of distinct factions and unite them to rebuild a functional society that works as a single cohesive team.

**Class System:**

Three distinct classes for units and they beat each other rock-paper-scissors style, ie each does double damage when paired against what it is strong against and receives half damage from a unit that has it as a weakness.

| Role | Strong against | Weak against |
| --- | --- | --- |
| Scientist | Engineer (2x damage) | Warrior (0.5x damage) |
| Engineer | Warrior (2x damage) | Scientist (0.5x damage) |
| Warrior | Scientist (2x damage) | Engineer (0.5x damage) |

**Faction System:**

Six distinct factions (not necessarily set in stone), each with its own advantages/disadvantages and fighting style.

- Potentially use this also as a typing system, where certain factions are stronger or weaker against other factions

| Color | Faction | Scientist | Engineer | Warrior |
| --- | --- | --- | --- | --- |
| Black | Astronomy | Astronomer | Rocket Scientist | (Space?) Marine |
| Grey | Physics | Physicist | Civil Engineer | Sniper |
| Blue | Computer Science | Computer Scientist | Software Developer | Hacker |
| Yellow | Nuclear | Nuclear Scientist | Nuclear Engineer | Plasma-eer |
| Green | Biology | Biologist | Environmental Engineer | Ranger |
| Red | Chemistry | Chemist | Material Engineer | Grenadier |

Player is known as **THE PROJECT MANAGER**

**Loyalty and Morale Systems**

- Each faction has a loyalty rating to you, **The Project Manager**, that increases as you use their units
- The morale of each unit depends on faction loyalty and team composition
    - Certain factions hate each other more than others, ie inter-faction affinity/anti-affinity
- Damage given and taken is affected by Morale
- Loyalty gain is inverse to morale — winning a battle at low morale gains more loyalty with the factions on your team than winning a battle at high morale
    - Basically the harder the battle, the higher the risk of losing, but also the greater the loyalty gain with stakeholder factions
- At low enough loyalty with a faction, you lose your units for that faction (they rebel and become your enemy)
- If you lose all of your factions, you lose the game

**World / Unit Mechanics**

- World is procedurally generated
    - World has biomes for each faction
        - Each biome has a capital which is like a boss fight (think gyms in Pokemon), capture the capital and the biome will passively provide resources
        - Spend loyalty for a faction at one of its capitals to buy units from that faction at the level for that biome
    - World has rings of difficulty, the further you are from your starting base, the more difficult the fights get, but also the higher the rewards
- Units are individual people with randomly generated names and stats
    - Units have stats that increase with level and level up to infinitely high levels (no level cap), but each level requires exponentially more experience
- Player chooses starting unit/faction and gains more units by fighting
- Resources are gathered idly based on territorial holdings
    - AI may try to retake territory while you are playing and you must defend your territory? Maybe?
- You can also revisit old battles to farm for units/XP/loyalty
- Battle Outcomes are deterministic (no save scumming), but not all variables are shown to the player, only a percentage win percentage based on a few selected seeds, only one of which is the real seed

**Gameplay**

- Scroll around the world map via an on-screen virtual joystick — probably we don’t need a joystick, maybe just tap and drag
    - When on the world map, resources are displayed across the top/bottom of the screen
    - Teams/Squads of units are movable around the world map (think Heroes of Might and Magic)
        - A Team/Squad can contain up to 6 units
    - Movement is turned based, take a turn and then the CPU takes a turn, ie think Civilization
    - World uses a Hex Grid
    - When a squad is in range, combat can be initiated
        - Most units have a range of only 1 hex, ie they can attack adjacent cells, but some units may have greater range
        - During combat, an animation plays where units attack the opposing squad in a specific order determined by a stat like Initiative (ie like the combat animation in Advance Wars or Fire Emblem or Pokemon)
        - The player does not intervene in the combat animation, but they can skip these animations
