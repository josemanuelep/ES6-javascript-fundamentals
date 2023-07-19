import { faker } from "@faker-js/faker";

let numbers = [];
let sum = 0;

// conventional for each with index
for (let index = 0; index < 10; index++) {
  numbers.push(faker.number.int({ min: 10, max: 100 }));
}

// more efficient for each
numbers.forEach((fakeNumber) => {
  console.log(`the num is: ${fakeNumber.toString()}`);
  sum += fakeNumber;
});

console.log(`the sum is: ${sum}`);
