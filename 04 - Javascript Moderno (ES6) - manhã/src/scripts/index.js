import { carList } from "./database.js";

// 1. CONST E LET (IMUTABILIDADE)
// HOISTING
// imutability();

function imutability() {
  const myString = "Chrystian";
  // myString = "Alex";

  let myString2 = "Chrystian";
  // myString2 = "Alex";
  console.log(myString2);

  const myArray = [1, 2, 3];
  // myArray = [100, 200, 300];
  myArray.push(4);
  myArray[0] = 100;
  console.log(myArray);
}

// 2. Arrow Functions
// myArrowFunction();

const myArrowFunction = () => {
  console.log("Arrow Function executada!!");
};
// 3. Template Literals
function templateLiterals() {
  const firstName = "Chrystian";
  const lastName = "Rodolfo";

  console.log("Nome: " + firstName + " - " + "Sobrenome: " + lastName);
  // console.log(`Nome: ${firstName} - Sobrenome: ${lastName}`);
}
// templateLiterals();

// 4. Parametros Padrão
function defaultParams(num1, delta = 5) {
  const result = num1 * delta;
  console.log(result);
}
// defaultParams(3, 2);
// defaultParams(3);

// 5. Desestruturação
function desestructuring() {
  const person = { firstName: "Lucira", lastName: "Silva", cpf: 12345 };
  // console.log(person.firstName);
  // console.log(person.lastName);

  // const personFirstName = person.firstName;
  // const personLastName = person.lastName;

  // console.log(personFirstName);
  // console.log(personLastName);

  const { firstName, cpf } = person;
  console.log(firstName);
  console.log(cpf);
}
// desestructuring();

function desestructuring2({ firstName, cpf }) {
  // const { firstName, cpf } = person;
  console.log(firstName);
  console.log(cpf);
}

const person = { firstName: "Lucira", lastName: "Silva", cpf: 12345 };
// desestructuring2(person);

function showCarsModule(carArray) {
  // carArray.forEach((car) => console.log(car));
  // carArray.forEach((car) => console.log(Object.values(car)));
  // carArray.forEach((car) => console.log(Object.keys(car)));
  // carArray.forEach((car) => console.log(Object.entries(car)));

  for (let i = 0; i < carArray.length; i++) {
    for (const car of Object.entries(carArray[i])) {
      console.log(car);
    }
  }
}

showCarsModule(carList);
