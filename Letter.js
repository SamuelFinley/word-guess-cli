
let Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;
    this.respond = () => {return ( this.guessed ? this.letter : '_')};
    this.check = (character) => {this.letter.toLowerCase() === character.toLowerCase() ? this.guessed = true : this.guessed};
}
module.exports = Letter;  