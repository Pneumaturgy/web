# Pneuma Knights

> Status: in development · design doc · created 13 July 2024
> Source: Notion, *Projects → Design Docs → Pneuma Knights*.
> Full design document:
> [Google Docs](https://docs.google.com/document/d/1w635j4DAkOwRYjL4AGsxnFsfcrL3GB94Eme8NHEOoUI/edit#heading=h.689pbr44gy3p)

Story proposals: [Por Nada](por-nada.md) ·
[Nico's Story Proposal](nicos-story-proposal.md) ·
[Rapha's Story](raphas-story.md)

## Premise

*You wake up in a drop pod falling from the sky onto a strange planet. As
you emerge from the drop pod, you find yourself in a mech suit, surrounded
by a strange planet rich in resources. **Who are you? What is this strange
world? How did I get here?** You reach into your crashed drop pod and pull
out a `<random>` weapon. **Now you must survive!***

## Design pillars

- 2D, top down 3rd person view (like Factorio)
- Procedurally generated world
- Day/night cycle (like Minecraft)
- World is peaceful by day (*at least for now…*) and dangerous by night
  (*things that seemed inanimate by day now suddenly want to kill you?*)
- Gather resources from your environment to upgrade your gear / build your
  army of drones
- Discover other procedurally generated (but not all of them, see below)
  mechs just like yours, some are dead and some are alive (*and if alive
  they definitely want to kill you*)
  - Find and research new (random) parts for your mech via what you scavenge
    from those mechs (once they are dead)
- Build and maintain a group of autonomous drones to help you gather
  resources and defend yourself
- On death, explode into a bunch of pixels and choose what item(s) to take
  with you into the next life — based on a point system / power level, i.e.
  a bunch of weak items or a single strong one; every item has a power
  rating and you can carry up to X rating forward. ***Is this a simulation?
  How can I escape?***
  - Intro plays again and you are now playing a new game, but instead of a
    random weapon (unless you took nothing from the previous life), you find
    your saved items from your previous run in the drop pod.
- Find a secret set of powerful Arthurian Artifacts scattered throughout the
  world *to escape the simulation* and ***discover what is really going on***
- Find and fight past versions of yourself (these are the mechs that are not
  procedurally generated)

## The slot system

Your mech suit has multiple slots for items/artifacts. Only a single slot
can be controlled at a time (for a powerful effect), all other slots are
automated with a weaker effect. Overtime as you fill all the slots, you may
discover powerful synergies between slots/artifacts to the point where the
combination of your automated slots is stronger than your single selected
manual slot — at which point you are encouraged to pick your weakest
slot/item combination as your manual slot, to let the automation do all the
work as you run around the map exploring and fighting everything out to kill
you.
