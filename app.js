// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }

/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: 'Colt',
// };

// instructor[favoriteNumber] = 'That is my favorite!';

/* Write an ES2015 Version */
// const instructor = {
//   fistName: 'Colt',
//   [favoriteNumber]: 'This is my favorite',
// };

// var instructor = {
//   firstName: 'Colt',
//   sayHi: function () {
//     return 'Hi!';
//   },
//   sayBye: function () {
//     return this.firstName + ' says bye!';
//   },
// };

/* Write an ES2015 Version */
// let instructor = {
//   fistName: 'Colt',
//   sayHi() {
//     return 'Hi';
//   },
//   sayBye() {
//     return this.fistName + ' says bye!';
//   },
// };

const d = createAnimal('dog', 'bark', 'Woooof!');
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
  return {
    species,
  },
  // I don't understand why this is invalid below this line.
  animalSound(verb){
    return verb[noise];
  }
}

// Solution given.
function createAnimal(species, verb, noise){
  return {
    species,
    // Confused based on this how this function is being used in the code and how it is setting what is expected.
    [verb](){
      return noise;
    }
  }
}
