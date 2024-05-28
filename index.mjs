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