
const chalk = require('chalk');
const Word = require("./Word");
//import {Word} from 'Word';
const inquirer = require('inquirer');
const words = [
    'jabberwocky',
    'Awkward',
    'Bagpipes',
    'Banjo',
    'Bungler',
    'Croquet',
    'Crypt',
    'Dwarves',
    'Fervid',
    'Fishhook',
    'Fjord',
    'Gazebo',
    'Gypsy',
    'Haiku',
    'Haphazard',
    'Hyphen',
    'Ivory',
    'Jazzy',
    'Jiffy',
    'Jinx',
    'Jukebox',
    'Kayak',
    'Kiosk',
    'Klutz',
    'Memento',
    'moist',
    'Mystify',
    'Numbskull',
    'Ostracize',
    'ottering',
    'Oxygen',
    'Pajama',
    'Phlegm',
    'Pixel',
    'Polka',
    'Quad',
    'Quip',
    'Rhythmic',
    'Rogue',
    'Sphinx',
    'Squawk',
    'Swivel',
    'Toady',
    'Twelfth',
    'juxtaposition',
    'Waxy',
    'Wildebeest',
    'Zealous',
    'Zigzag',
    'Zippy'
  ]
  let wordCon = {
      word: '',
      guessesLeft: 20
  }
    let questions = [
        {
            message: 'guess a letter',
            type: "input",
            name: "guessed"
        }];
    let getWord = words[Math.floor((Math.random() * words.length))];
    wordCon.word = new Word(getWord);
let question = () => {
    console.log(wordCon.word.current().join(' '));
    main();
}

let newWord = () => {
    wordCon.guessesLeft === 0 && !wordCon.word.current().includes("_") ? console.log("D: Oh no! You've run out of guesses. \nHave a new word.") : console.log(":D Yay! You did it. \nHave a new word.");
    console.log('enter exit to close program');
    wordCon.guessesLeft = 20;
    console.log(wordCon.word.current().join(''))
    let getWord = words[Math.floor((Math.random() * words.length))];
    wordCon.word = new Word(getWord);
    console.log('Next Word');
    question();
}

const byebye = () => {
    console.log('Have a nice day');
    process.exit
}

let main = () => {
    inquirer.prompt(questions).then(answers => {

        let obj = answers['guessed'];
        obj.toLowerCase() === 'exit' ? byebye() : wordCon.word.guess(obj);
        wordCon.guessesLeft-- 
        wordCon.word.current().includes("_") && wordCon.guessesLeft > 0 ? question() : newWord();
    });
}
console.log(wordCon.word.current().join(' '));
main();