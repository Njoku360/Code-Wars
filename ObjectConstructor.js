//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  brewEspresso() {
    return "Brewing espresso...";
  }

  steamMilk() {
    return "Steaming milk...";
  }

  cleanMachine() {
    return "Cleaning the machine...";
  }
}

// Example usage:
const myEspressoMachine = new EspressoMachine("De'Longhi", "EC155", "Black", 150);
console.log(myEspressoMachine.brewEspresso()); // Output: Brewing espresso...
console.log(myEspressoMachine.steamMilk()); // Output: Steaming milk...
console.log(myEspressoMachine.cleanMachine()); // Output: Cleaning the machine...
