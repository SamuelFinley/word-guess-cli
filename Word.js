let letter = require("./Letter");
 let Word = function (word) {
    this.word = word.split('').map(x => new letter(x));
    this.current = () => {return (this.word.map(element => {return element.respond()}));};
    this.guess = (character) => {this.word.forEach(element => {element.check(character)});};
}
module.exports = Word;