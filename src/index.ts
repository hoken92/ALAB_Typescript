class Vehicle {
  status: "started" | "stopped" = "stopped";
  make: string;
  model: string;
  wheels: number;

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

class NCycle<T> {
  status: "started" | "stopped" = "stopped";
  make: T | T[];
  model: T | T[];
  wheels: number;

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }

  stop() {
    this.status = "stopped";
  }

  // Part 3
  print(n: number = 0): void {
    if (
      (typeof this.make === "number" && typeof this.model === "number") ||
      (typeof this.make === "string" && typeof this.model === "string")
    ) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (
      Array.isArray(this.make) &&
      Array.isArray(this.model) &&
      typeof this.make[n] !== "undefined" &&
      typeof this.model[n] !== "undefined"
    ) {
      console.log(
        `This NCycle has a ${this.make[n]} and ${this.model[n]} at index ${n}.`
      );
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  printAll(): void {
    if (
      ((typeof this.make === "number" && typeof this.model === "number") ||
        (typeof this.make === "string" && typeof this.model === "string")) &&
      this.make === this.model
    ) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (Array.isArray(this.make) && Array.isArray(this.model)) {
      let foundMatchedItems = false;
      for (const make of this.make) {
        for (const model of this.model) {
          if (make === model) {
            console.log(
              `This NCycle has ${make} Make and ${model} Model that matches`
            );
            foundMatchedItems = true;
            break;
          }
        }
      }
      if (foundMatchedItems === false) {
        console.log("This NCycle was not created properly.");
      }
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}

// Part 4
const testCycle1 = new NCycle<number>(1, 2, 3);
console.log("Cycle 1:");
// testCycle1.print();
testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That", 4);
console.log("Cycle 2:");
// testCycle2.print();
testCycle2.printAll();

const testCycle3 = new NCycle<string>("Make", 10, 4);
console.log("Cycle 3:");
// testCycle3.print(4);
testCycle3.printAll();

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
console.log("Cycle 4:");
// testCycle4.print(2);
testCycle4.printAll();

const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
console.log("Cycle 5:");
// testCycle5.print(7);
testCycle5.printAll();

function add(x: number, y: number): number {
  return x + y;
}
add(testCycle1.make, testCycle5.model[1]);
// Error expected here
add(testCycle2.make, testCycle4.model[1]);
