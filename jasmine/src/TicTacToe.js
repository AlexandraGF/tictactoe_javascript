var TicTacToe = function (player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.ticArray = ["", "", "", "", "", "", "", "", ""];
};

TicTacToe.prototype.turn = function (option, position) {
  this.ticArray[position] = option
};
