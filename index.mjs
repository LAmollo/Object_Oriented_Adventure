const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  
  // Loop to log each item in Robin's inventory
  console.log("Robin's Inventory:");
  adventurer.inventory.forEach(item => {
    console.log(item);
  });
  
  // Test the roll method
  console.log("\nRolling the dice:");
  adventurer.roll();
  adventurer.roll();
  adventurer.roll();
  
  class Character {
    constructor(name) {
      this.name = name;
      this.health = 100; // standardized to a maximum of 100
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  // Example of a special ability specific to adventurers
  useSpecialAbility() {
    console.log(`${this.name} is using a special ability!`);
    // Logic for the special ability
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  // Example of a companion-specific method
  assistOwner() {
    console.log(`${this.name} is assisting ${this.owner}'s.`);
    // Logic for assistance
  }
}


robin.inventory = ["sword", "potion", "artifact"];

const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory = ["small hat", "sunglasses"];

robin.companion = leo;
leo.companion = frank;

class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  useSpecialAbility() {
    console.log(`${this.name} is using a special ability!`);
    // Logic for the special ability
  }

  duel(opponent) {
    console.log(`${this.name} is dueling ${opponent.name}...`);
    while (this.health > 50 && opponent.health > 50) {
      const thisRoll = this.roll();
      const opponentRoll = opponent.roll();
      if (thisRoll < opponentRoll) {
        this.health -= 1;
      } else if (opponentRoll < thisRoll) {
        opponent.health -= 1;
      }
      console.log(`${this.name} health: ${this.health}, ${opponent.name} health: ${opponent.health}`);
    }
    const winner = this.health > 50 ? this.name : opponent.name;
    console.log(`${winner} wins the duel!`);
  }
}

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }

  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }

  findByIndex(index) {
    return this.adventurers[index];
  }

  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

// Example usage:
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");
const leo = healers.generate("Leo");

robin.duel(leo);

class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  useSpecialAbility() {
    console.log(`${this.name} is using a special ability!`);
    // Logic for the special ability
  }

  duel(opponent) {
    console.log(`${this.name} is dueling ${opponent.name}...`);
    while (this.health > 50 && opponent.health > 50) {
      const thisRoll = this.roll();
      const opponentRoll = opponent.roll();
      if (thisRoll < opponentRoll) {
        this.health -= 1;
      } else if (opponentRoll < thisRoll) {
        opponent.health -= 1;
      }
      console.log(`${this.name} health: ${this.health}, ${opponent.name} health: ${opponent.health}`);
    }
    const winner = this.health > 50 ? this.name : opponent.name;
    console.log(`${winner} wins the duel!`);
  }
}

// Additional properties and methods:

// 1. Attack method for Fighters
Adventurer.prototype.attack = function (opponent) {
  console.log(`${this.name} attacks ${opponent.name} with a sword!`);
  opponent.health -= 10; // Assuming a standard attack reduces 10 health
};

// 2. Heal method for Healers
Adventurer.prototype.heal = function (target) {
  console.log(`${this.name} heals ${target.name} with a potion!`);
  target.health += 20; // Assuming a standard healing potion restores 20 health
};

// 3. Cast spell method for Wizards
Adventurer.prototype.castSpell = function (opponent) {
  console.log(`${this.name} casts a fireball at ${opponent.name}!`);
  opponent.health -= 15; // Assuming a standard spell inflicts 15 damage
};

// 4. Companion specific methods
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  assistOwner() {
    console.log(`${this.name} is assisting ${this.owner}'s.`);
    // Logic for assistance
  }

  trackScent() {
    console.log(`${this.name} is tracking a scent.`);
    // Logic for tracking
  }
}

// Usage example:
const fighter = new Adventurer("Fighter", "Fighter");
const healer = new Adventurer("Healer", "Healer");
const wizard = new Adventurer("Wizard", "Wizard");

fighter.duel(healer);
healer.heal(fighter);
wizard.castSpell(fighter);

