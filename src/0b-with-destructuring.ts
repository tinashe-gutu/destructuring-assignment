const poemLines = [
  "roses are red",
  "violets are blue",
  "poems are fun",
  "coding is too!",
];

const person = { firstName: "Richard", lastName: "Ng", location: "UK" };

// const firstLine = poemLines[0];
// const secondLine = poemLines[1];
const [firstLine, secondLine] = poemLines;

// const firstName = person.firstName;
// const lastName = person.lastName;
const { firstName, lastName } = person;

console.log(firstLine);
console.log(secondLine);
console.log(`A poem by ${firstName} ${lastName}`);

export {} // can safely ignore, but if interested: https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206