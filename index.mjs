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
  