var TicTacToe = function (player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.ticArray = ["", "", "", "", "", "", "", "", ""];
  this.availableFields = 9;
};

TicTacToe.prototype.turn = function (option, position) {
  if (this.ticArray[position] == 'x' || this.ticArray[position] == 'o') {
    return this._takenFields();
  }
  else if (this.ticArray[position] != 'x' || this.ticArray[position] != 'o') {
  this.ticArray[position] = option;
  this.availableFields -= 1;
};

  if (this.availableFields != 0) {
    return this._fullLine();
  }
  else if (this.availableFields == 0) {
    return this._gameOver();
  };

};



TicTacToe.prototype._gameOver = function () {
  if (this.availableFields == 0) {
    return "Game over! No one won! Not available spaces to play";
  }
};



TicTacToe.prototype._takenFields = function () {
  return 'Cannot choose a taken field! Please choose another empty field!';
};


TicTacToe.prototype._fullLine = function () {

if (this.ticArray[0] == 'x' && this.ticArray[3] == 'x' && this.ticArray[6] == 'x'){
  return "Game over! " + this.player1.name + " has won!";
}
  if (this.ticArray[1] == 'x' && this.ticArray[4] == 'x' && this.ticArray[7] == 'x'){
    return "Game over! " + this.player1.name + " has won!";
  }
  if (this.ticArray[2] == 'x' && this.ticArray[5] == 'x' && this.ticArray[8] == 'x'){
    return "Game over! " + this.player1.name + " has won!";
  }
  if (this.ticArray[2] == 'x' && this.ticArray[4] == 'x' && this.ticArray[6] == 'x') {
    return "Game over! " + this.player1.name + " has won!";
  }
  if (this.ticArray[0] == 'x' && this.ticArray[4] == 'x' && this.ticArray[8] == 'x') {
    return "Game over! " + this.player1.name + " has won!";
  }
  if (this.ticArray[0] == 'x' && this.ticArray[1] == 'x' && this.ticArray[2] == 'x') {
    return "Game over! " + this.player1.name + " has won!";
  }
  if (this.ticArray[3] == 'x' && this.ticArray[4] == 'x' && this.ticArray[5] == 'x') {
    return "Game over! " + this.player1.name + " has won!";
  }
  if (this.ticArray[6] == 'x' && this.ticArray[7] == 'x' && this.ticArray[8] == 'x'){
    return "Game over! " + this.player1.name + " has won!";
  }


  if (this.ticArray[0] == 'o' && this.ticArray[3] == 'o' && this.ticArray[6] == 'o'){
    return "Game over! " + this.player2.name + " has won!";
  }
  if (this.ticArray[1] == 'o' && this.ticArray[4] == 'o' && this.ticArray[7] == 'o'){
    return "Game over! " + this.player2.name + " has won!";
  }
  if (this.ticArray[2] == 'o' && this.ticArray[5] == 'o' && this.ticArray[8] == 'o'){
    return "Game over! " + this.player2.name + " has won!";
  }
  if (this.ticArray[2] == 'o' && this.ticArray[4] == 'o' && this.ticArray[6] == 'o'){
    return "Game over! " + this.player2.name + " has won!";
  }
  if (this.ticArray[0] == 'o' && this.ticArray[4] == 'o' && this.ticArray[8] == 'o'){
    return "Game over! " + this.player2.name + " has won!";
  }
  if (this.ticArray[0] == 'o' && this.ticArray[1] == 'o' && this.ticArray[2] == 'o'){
    return "Game over! " + this.player2.name + " has won!";
  }
  if (this.ticArray[3] == 'o' && this.ticArray[4] == 'o' && this.ticArray[5] == 'o'){
    return "Game over! " + this.player2.name + " has won!";
  }
  if (this.ticArray[6] == 'o' && this.ticArray[7] == 'o' && this.ticArray[8] == 'o'){
  return "Game over! " + this.player2.name + " has won!";
}
};
