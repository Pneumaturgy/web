# Geomancy

> Status: in development · design doc · created 29 April 2024
> Source: Notion, *Projects → Design Docs → Geomancy*.

**AutoChess + AR + Slice & Dice.**

See also: [Original concept](geomancy-original-concept.md) ·
[Classes](geomancy-classes.md)

Reference: [Noble, *Geomancy* (PhD thesis, SAS)](https://sas-space.sas.ac.uk/6648/1/Noble%20PhD%20Final.pdf)

## Context and story

A cult of Geomancers has created an application (which you are using) to
settle disputes and tell the future. A player may download the game out of
intrigue and a lust of power.

After you download, TumTum, a Geomancer, meets you and explains about how
the Geo foretold of your arrival. That you are due to enter into the mystic
arts, and begins to teach you; he will be your tutorial narrator, and guide.

![TumTum, the urban geomancer](../../assets/Geomancy/_746a4686-7e99-4ddc-ad22-063720b0f69c.jpg)

*TumTum, the urban geomancer*

## Enter Geo; the magical dice of fate

Geo are crafted from precious materials, shaped by master artisans, and
blessed through rigorous sacrificial or ritualistic processes. Thus, after
the laborious process, every Geo is unique in its own way.

Regardless, there are specific classes of Geo which determine which power
they hold. This energy is determined by the material, and therefore its
colour is a good indicator. Geo faces can be changed, of course, but
traditionally, it is considered more honorable to keep the faces pure.

The Geo are named after
[logical form](https://en.m.wikipedia.org/w/index.php?title=Logical_form&diffonly=true).
It is common practice for Geomancers, during battle, to associate logical
form to their Geo, in order to create arguments in their battles; thus, they
continue to use the art of Geomancy to determine the truth to their
philosophy, by literally testing it in battle.

Below is a list of the most common Geo types.

### Modus Ponens — *hematite*

![hematite](../../assets/Geomancy/hematite.jpg)

This dark Geo represents a class that improves other Geo, for example by
adding 1 to their roll.

### Modus Tollens — *platinum*

![platinum](../../assets/Geomancy/platinum.jpg)

This pure Geo represents a class that defends other Geo, for example by
reducing 1 to any damage they may take.

### Disjunctive Syllogism — *garnet*

![garnet](../../assets/Geomancy/garnet.jpg)

Necromancers and dark healers use this dark Geo for powerful life magic,
often at the cost of other unfortunate souls.

### Hypothetical Syllogism — *ruby*

![ruby](../../assets/Geomancy/ruby.jpg)

Seen in every setup, this life-giving pure Geo can give life and even
increase life total.

### Constructive Dilemma — *sapphire*

![sapphire](../../assets/Geomancy/sapphire.jpg)

The only form of pure magic is that which gives knowledge, and therefore
this Geo focuses on the accumulation of mana, and offers spells to banish.

### Destructive Dilemma — *lapis lazuli*

![lapis lazuli](../../assets/Geomancy/lapis.jpg)

Wild elemental spells are offered by this dark Geo, which are hungry for
mana, meaning it must gather mana with any means necessary.

### Simplification — *citrine*

![citrine](../../assets/Geomancy/citrine.jpg)

Neutral and simple, this Geo offers simple attacks.

### Conjunction — *carnelian*

![carnelian](../../assets/Geomancy/carnelian.jpg)

The preferred dark Geo of the wild ones, who prefer not to follow the rules,
and attack with dirty tricks.

### Addition — *fire opal*

![fire opal](../../assets/Geomancy/fire_opal.jpg)

The refined martial arts are offered by this pure Geo, which prefers to deal
damage with consideration and efficiency to deliver fatal blows.

### Biconditional Introduction — *jade*

![jade](../../assets/Geomancy/jade.jpg)

Alter your environment under the feet of your enemies with this neutral Geo,
with trapping or mind altering effects.

### Biconditional Elimination — *emerald*

![emerald](../../assets/Geomancy/emerald.jpg)

The neutral Geo best used to weaken and demoralize the opponent.

## Team composition — *the argument*

Reference: [Geomantic figures (Wikipedia)](https://en.wikipedia.org/wiki/Geomantic_figures)

![The figure board](../../design-handoff/project/assets/Geomancy/1000006849.png)

When dice are rolled, they are rolled over a board with icons which
represent these shapes. Having the die fall into these shapes, even if there
are some extra, has a bonus effect.

You can choose to have whatever classes that you want, but you can never
have 3 of the same class.

### Via — *The Way*

![Via](../../assets/figures/via.png)

Represented by a waning moon, this figure forces all health and strength
generation for the first turn to be −2, increasing by one for each
subsequent turn, up to a maximum of +2. Then, the effect is removed.

### Cauda Draconis — *The Tail of the Dragon*

![Cauda Draconis](../../assets/figures/caudadraconis.png)

Immediately lose the battle if this is the first figure drawn. During any
subsequent draws, it blocks the effect of whatever Geo takes its head. At
the end of the game, if there you just have one Geo remaining, you
immediately win.

### Puer — *The Boy*

![Puer](../../assets/figures/puer.png)

This phallic figure represents domination, and therefore when
revealed, triggers a −1 health to all Geo currently not locked, and +1
health to all Geo currently locked.

### Fortuna Minor — *Lesser Fortune*

![Fortuna Minor](../../assets/figures/fortunaminor.png)

Bathe in the gentle sun rays of fortune; this figure, when revealed, buffs
all pure type Geo with a +1 to health and attack.

### Puella — *The Girl*

![Puella](../../assets/figures/puella.png)

This clitoric figure represents subjugation. All Geo locked after
this figure have been revealed receive a +2 to strength and health.

### Amissio — *Loss*

![Amissio](../../assets/figures/amissio.png)

This figure represents two bowls or cups turned upside-down. Only positive
if loss is what you were looking for; every Geo loses 1 health, triggering
any health-loss effect that may be in play.

### Carcer — *The Prison*

![Carcer](../../assets/figures/carcer.png)

This enclosure, chain or prison cell, when revealed, forces you to lock
every Geo. You may not reroll any Geo, in or out of this figure.

### Laetitia — *Joy*

![Laetitia](../../assets/figures/laetitia.png)

This joyous arch is a positive figure, and gives +2 strength to all Geo.

### Caput Draconis — *The Head of the Dragon*

![Caput Draconis](../../assets/figures/caputdraconis.png)

If you are the initiator of the fight, and this is the first figure drawn,
immediately win the fight. During any subsequent drawings, it gives +2
health and strength to whichever dice take the two top positions.

### Conjunctio — *The Conjunction*

![Conjunctio](../../assets/figures/conjunctio.png)

This combination of forces is a neutral energy; if all the dice which made
up this figure are locked at once, each receives a +1 bonus to attack and
strength.

### Acquisitio — *Gain*

![Acquisitio](../../assets/figures/acquisitio.png)

Two upturned bowls or cups represent abundance, and is a positive sign if
gain is what is required; every Geo gets +1 health.

### Rubeus — *Red*

![Rubeus](../../assets/figures/rubeus.png)

This inversive figure is very negative; the centre Geo is destroyed if it is
Pure. It is given +3 strength and health if it is Dark.

### Fortuna Major — *Greater Fortune*

![Fortuna Major](../../assets/figures/fortunamajor.png)

Glory in the growing bounty from the earth; this figure, when revealed,
buffs all dark type Geo with a +1 to health and attack.

### Albus — *White*

![Albus](../../assets/figures/albus.png)

Pure as snow, this figure doubles the centre Geo if it is pure. If it is
Dark, this Geo is destroyed.

### Tristitia — *Sorrow*

![Tristitia](../../assets/figures/tristitia.png)

This broken arch is a negative figure, and weighs you down. −2 strength to
all dice.

### Populus — *The People*

![Populus](../../assets/figures/populus.png)

Represented by the waxing moon, when this figure is revealed, your
combination of dice is repeated for the next two rounds.

## Combat

An opponent has been found. They want to put their argument to the test with
you. A battle begins.

Combat is performed asynchronously; kind of like a chess application, where
turns are managed at your leisure. On your Battle screen, you might have up
to 12 games running at the same time.

### Phase 1

The screen is as follows; you see the pattern board ahead of you, and your
dice are in a row near the bottom of the screen. Tap and hold, and drag
across the Geo you want to hold. Shake the Geo by swiping up and down the
screen, and then release; the Geo fall and land on the table. Both players
prepare their roll, and can press a dice to lock it and pick up the others
to roll again. Once all dice are locked, then we pass onto phase 2 — you can
lock them on the table, to increase your chances to get a specific figure.

Before anything else the figures are analyzed. If any of the dice fell in
the pattern of one of the figures, the effect of that figure is triggered.

### Phase 2

Finally, you execute your build. This is the first time that you actually
interface, and therefore connect, to an opponent's data. The person that
initiated combat always goes second.

You can now see your dice, on the bottom of the screen, facing the
opponents dice, in a row. You can select your dice and then select an
opponent's dice to indicate your target, or an ally if appropriate. Mana is
saved to your character when used. If no face was selected, unfortunately,
this dice must skip the turn.

When both players have made their choices, we return to Phase 1. The next
time you view the battle, you see an animation of the actions, in the order
that it was taken. Then the process starts again from the rolling phase.

### End of battle phase

Once a player loses all the health of all of their dice, the battle ends.
The winner receives materials, and in some cases, copies of the opponents
dice to break down or use. The argument with the most winstreaks in the area
is displayed on a leaderboard.

The loser receives a smaller amount of materials. In ranked matches, they
may even lose some Geo.

*This is at the discretion of design and balance of the overall day.*

## The world

The Geomancers live on the virtual world, using a digital copy of our own
maps.

The game uses a GPS map to prepare the world. There are many different
things you can do on the world screen.

Firstly, you will set up your geomancy base. Choose a random spot on the map
with a pin; this is how other players will find and interact with you.
Players are encouraged not to use their home location, but pins take a
radius of 1km at a minimum to obfuscate the players actual home.

You may tap the territory of another geomancer to trigger a battle. The
territory is defined by the most successful argument in that geomancer's
kit. One a battle has been requested, it is saved in your battle screen.

There is, potentially, space for an AR component as well. By moving around
the map and exploring, you will be able to find materials, items, Geo and
even opponents. There are mini games associated with picking up each one.

## Gathering Geo

Apart from the AR aspect of finding Geo, there are many other ways to get
some.

By exploring special locations you can find materials, or you can rarely
find whole Geo.

Materials can be used to craft items or Geo themselves, as well as upgrading
Geo.

## Items

Items can be used to enhance faces. Each dice can equip a maximum of three
items. Items can replace faces, give specific spells (cast with magic during
a turn) or buff based on specific conditions.
