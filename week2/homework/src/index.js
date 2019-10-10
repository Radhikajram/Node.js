'use strict';

// TODO: Write the homework code in this file

const fs = require('fs');
let readMe = [];
readMe = fs.readFileSync('sample.json', 'utf8');
if (readMe != []) {
  readMe = JSON.parse(readMe);
}

//Get input from command line.
const commandName = process.argv[2];

//Different operation on TODO  based  on input.

if (commandName == 'add') {
  add();
} else if (commandName == 'remove') {
  remove();
} else if (commandName == 'update') {
  update();
} else if (commandName == 'help') {
  display();
} else if (commandName == 'list') {
  console.log(readMe);
} else if (commandName == 'reset') {
  fs.writeFileSync('sample.json', '[]');
} else {
  console.log('Not a valid command');
}
// Function to Add new entry to JSON
function add() {
  let todo = readMe.length + 1;
  let action = '';
  process.argv.forEach(function(val, index) {
    if (index === 3) {
      action = action + process.argv[index];
    }
  });

  readMe.push({ Todo: todo, Action: action });
  writeToFile();
}
// Function to Remove an entry of specific index.

function remove() {
  const itemToBeRemoved = process.argv[3];

  if (itemToBeRemoved < 0) {
    console.log('Enter valid index to remove an entry');
  } else {
    const indexOfElement = readMe.findIndex(item => item.Todo == itemToBeRemoved);
    if (indexOfElement > -1) {
      readMe.splice(indexOfElement, 1);
    } else {
      console.log('Todo Item not available in your action plan');
    }
    writeToFile();
  }
}

// Update an entry at particular index

function update() {
  const itemToBeupdated = process.argv[3];
  let action = ' ';
  process.argv.forEach(function(val, index) {
    if (index > 3) {
      action = action + process.argv[index];
    }
  });
  if (itemToBeupdated < 0) {
    console.log('Enter valid index to update an entry');
  } else {
    let foundIndex = readMe.findIndex(x => x.Todo == itemToBeupdated);
    readMe[foundIndex].Action = action;
    writeToFile();
  }
}
// Display the help menu

function display() {
  console.log('This is command Line To do Application Using Text file');
  console.log('Command - Node index.js help - will display the possible options of To do');
  console.log('command - Node index.js list - Will display List of To Do items');
  console.log('command - Node index.js add  - will add a new entry to To do list');
  console.log('command - NOde index.js remove - WIll remove entry from To do list');
  console.log('command - Node index.js reset - WIll empty the To do list');
  console.log('command - Node index update - WIll update the existing entry.');
}
function writeToFile() {
  fs.writeFileSync('sample.json', JSON.stringify(readMe, null, 2));
}
