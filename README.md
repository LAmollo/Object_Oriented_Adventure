# Adventurer's Journey

Welcome to the adventurous world of Robin and friends! In this journey, you'll explore the depths of dungeons, duel fearsome opponents, and uncover ancient artifacts.

## About the Characters

### Robin
- **Role:** Healer
- **Inventory:** sword, potion, artifact, bedroll, 50 gold coins
- **Companion:** Leo the Cat
  - **Companion's Companion:** Frank the Flea
    - **Belongings:** small hat, sunglasses

### Leo (Robin's Companion)
- **Type:** Cat

### Frank (Leo's Companion)
- **Type:** Flea
- **Belongings:** small hat, sunglasses

## Abilities and Actions

### Robin (Healer)
- **Scouting:** Robin can scout ahead.
- **Healing:** Robin can heal fellow adventurers using potions.
- **Dueling:** Robin can engage in duels with opponents.

### Fighter
- **Dueling:** Engage in duels with opponents.
- **Attacking:** Use a sword to attack opponents.

### Wizard
- **Dueling:** Engage in duels with opponents.
- **Casting Spells:** Cast powerful spells, like fireballs, at opponents.

## Example Usage

```javascript
const adventurer = new Adventurer("Robin", "Healer");
const opponent = new Adventurer("Opponent", "Fighter");

// Engage in a duel
adventurer.duel(opponent);

// Heal a fellow adventurer
adventurer.heal(fellowAdventurer);

// Cast a spell at an opponent
wizard.castSpell(opponent);
