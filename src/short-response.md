# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1
 **Encapsulation** refers to keeping related data and the actions/methods that use the data together in a single package. This concept is beneficial because it offers protection to your data, it helps keep code organized, it offers flexibility which allows you to change the internal methods without messing up the code that implents it.

 **Example**: 
 ```js 
 const addSuffixToEachWord = (words, suffix) => {
  return words.map((word) => word + suffix);
}

const words = ['lime', 'lemon', 'gator'];

// The "outer function" declares the count variable in its scope
const makeCounter = () => {
  let count = 0;

  // the "inner function" references the count variable in the surrounding scope
  const counter = () => {
    count++;
    console.log(count);
  }

  return counter;
}

const myCounter = makeCounter();
```

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2 
 The **this** keyword refers to the object invoking the method. The keyword is useful because it allows multiple objects to share the same functionality.

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3
**Polymorphism** is when objects can be treated the same due to sharing the same method names even though the methods are implented in different ways. 

```js 
class Vehicle {
    constructor(make, model, year, mileage) {
        this.make = make
        this.model = model
        this.year = year
        this.mileage = 0
    }
    drive(miles) {
        if (miles > 0) {
            this.mileage += miles
            return `Drove ${this.miles} miles`
        }
    }
    getAge() {
        let age = 2025 - this.year
        return age
    }
    describe() {
        return `${this.year} ${this.make} ${this.model}`
    }
}

class ElectricCar extends Vehicle {
    #currentCharge = batteryRange
    constructt(make, model, year, mileage, batteryRange) {
        super(make, model, year, mileage)
        this.batteryRange = batteryRange

    }
    drive(miles) {
        if (miles > 0) {
            if (this.#currentCharge >= miles) {
                return `Drove ${miles} miles on electric power`
            }
            else {
                return `Not enough charge to drive ${miles} miles`
            }
        }
        else {
            return `Miles to drive must be positive.`
        }
    }
    charge() {
        this.#currentCharge = this.batteryRange
        return `Battery fully charged to ${batteryRange} miles`
    }
    getCharge() {
        return this.#currentCharge
    }
}
```
- In the **vehicle** class, a method named ``drive()`` was created and the way it is implemented is by  increasing mileage by the provided amount and returning "`Drove ${miles} miles on electric power`". 

- We see that same method in the subclass **ElectricCar** but this time the way it is implemented is by decreasing ``currentCharge`` by the provided miles and returning a message based on the conditionals. 

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4
- Part A: First I would create a super/parent class named ``pets``, then I would create subclasses/child classes of `Dog`, `cats`, and `birds` allowing them to inherit all the properties and methods from the superclass.

- Part B: **Inheritance**, helps make your code more organized and concise. It also helps avoid unnecessary and repeated code that do not add no new values.