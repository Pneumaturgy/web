# Geomancy — Classes

> Source: Notion, *Projects → Geomancy → Classes*.
> Parent: [Geomancy](geomancy.md)

The eleven Geo classes are the eleven logical forms. This page is the
working note that maps each form onto a game role.

Propositions used throughout:

- *P*: "It is raining."
- *Q*: "The ground is wet."
- *R*: "The sun is shining."
- *S*: "It is cloudy."

## Modus type — tanks

### 1. Modus Ponens — buff

**Form:** *P → Q*; *P*; therefore *Q*.

**Example:** If it is raining, then the ground is wet. It is raining.
Therefore, the ground is wet.

### 2. Modus Tollens — defend

**Form:** *P → Q*; *¬Q*; therefore *¬P*.

**Example:** If it is raining, then the ground is wet. The ground is not
wet. Therefore, it is not raining.

## Syllogism type — healers

### 3. Disjunctive Syllogism — dark health

**Form:** *P ∨ Q*; *¬P*; therefore *Q*.

**Example:** It is raining or the sun is shining. It is not raining.
Therefore, the sun is shining.

### 4. Hypothetical Syllogism — pure health

**Form:** *P → Q*; *Q → R*; therefore *P → R*.

**Example:** If it is raining, then the ground is wet. If the ground is wet,
then it is slippery. Therefore, if it is raining, then it is slippery.

## Dilemma type — magicians

### 5. Constructive Dilemma — pure magic

**Form:** *P → Q*; *R → S*; *P ∨ R*; therefore *Q ∨ S*.

**Example:** If it is raining, then the ground is wet. If the sun is
shining, then it is hot. It is raining or the sun is shining. Therefore, the
ground is wet or it is hot.

### 6. Destructive Dilemma — dark magic

**Form:** *P → Q*; *R → S*; *¬Q ∨ ¬S*; therefore *¬P ∨ ¬R*.

**Example:** If it is raining, then the ground is wet. If the sun is
shining, then it is hot. The ground is not wet or it is not hot. Therefore,
it is not raining or the sun is not shining.

## Operand type — warriors

### 7. Simplification — normal attack

**Form:** *P ∧ Q*; therefore *P*; therefore *Q*.

**Example:** It is raining and the ground is wet. Therefore, it is raining.
Therefore, the ground is wet.

### 8. Conjunction — special attack

**Form:** *P*; *Q*; therefore *P ∧ Q*.

**Example:** It is raining. The ground is wet. Therefore, it is raining and
the ground is wet.

### 9. Addition — ranged / multi attack

**Form:** *P*; therefore *P ∨ Q*.

**Example:** It is raining. Therefore, it is raining or the sun is shining.

## Biconditional type — thieves

### 10. Biconditional Introduction — crowd control

**Form:** *P → Q*; *Q → P*; therefore *P ↔ Q*.

**Example:** If it is raining, then the ground is wet. If the ground is wet,
then it is raining. Therefore, it is raining if and only if the ground is
wet.

### 11. Biconditional Elimination — debuff

**Form:** *P ↔ Q*; therefore *P → Q*; therefore *Q → P*.

**Example:** It is raining if and only if the ground is wet. Therefore, if
it is raining, then the ground is wet. Therefore, if the ground is wet, then
it is raining.

## Glossary

**Modus** — from Latin, "mode" or "manner". In logic it is used in the names
of argument forms to describe the manner in which the inference is made.
Examples: Modus Ponens (the mode of affirming), Modus Tollens (the mode of
denying). → *buff, defend*

**Syllogism** — a form of reasoning in which a conclusion is drawn from two
given or assumed propositions (premises). Each premise shares a common term
with the conclusion. *All humans are mortal; Socrates is human; therefore
Socrates is mortal.* → *health*

**Dilemma** — a type of argument involving two or more conditional (if-then)
statements that lead to an undesirable outcome. It forces a choice between
alternatives, each with significant consequences. *If we increase taxes,
people will be unhappy; if we don't, we can't fund public services; either
we increase taxes or we don't; therefore either people will be unhappy or we
can't fund public services.* → *special attack*

**Operand** — a quantity on which an operation is performed. In *P ∧ Q*, *P*
and *Q* are operands and *∧* is the operator. → *magic*

**Biconditional** — a logical connective stating that two propositions are
both true or both false; "if and only if". *P ↔ Q.*

> Note: the glossary's role labels (*dilemma → special attack*, *operand →
> magic*) are transposed relative to the section headings above (*dilemma
> type → magicians*, *operand type → warriors*). Preserved as written in the
> source; worth resolving before this feeds into balance work.
