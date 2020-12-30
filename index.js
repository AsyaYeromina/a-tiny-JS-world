/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
  Complete the below for code reviewers' convenience:

  Code repository: https://github.com/AsyaYeromina/a-tiny-JS-world
  Web app: https://asyayeromina.github.io/a-tiny-JS-world/.
  */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant {
  constructor(species, name, gender, legs, hands, speech, friends){
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.legs = legs;
    this.hands = hands;
    this.speech = speech;
    this.friends = friends;
  }

  makeString(){
    return [this.species, this.name, this.gender, this.legs, this.hands, this.speech, this.friends]
    .map(value => Array.isArray(value) ? value.join(", ") : value)
    .join("; ")
  }
}

class Animal extends Inhabitant {
}

class Sapiens extends Inhabitant {
}


const dog = new Animal('Canis', 'Jessie', 'female', '4', '0', 'Woof-woof!', ['Stepan', 'Ivanka']);
const cat = new Animal('Felis catus', 'Python', 'male', '4', '0', 'Meow', []);
const woman = new Sapiens('Homo sapiens', 'Ivanka', 'female', '2', '2', 'Hello!', ['Stepan', 'Python', 'Jessie']);
const man = new Sapiens('Homo sapiens', 'Stepan', 'male', '2', '2', 'Hello!', ['Ivanka', 'Python', 'Jessie']);
const catWoman = new Sapiens('Felis sapiens', 'Selina', 'female', '2', '2', cat.speech, ['Stepan', 'Python']);
const inhabitantObjects = [dog, cat, woman, man, catWoman];

  inhabitantObjects.map(inhabitant => {
    print(inhabitant.makeString())
})

// ======== OUTPUT ========
/* Use print(message) for output.
  Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

  Message can contain HTML markup. You may also tweak index.html and/or styles.css.
  However, please, REFRAIN from improving visuals at least until your code is reviewed
  so code reviewers might focus on a single file that is index.js.
  */

/* Print examples:
  print('ABC');
  print('<strong>ABC</strong>');
  print('<strong>ABC</strong>', 'div');

  print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
  print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
  */
