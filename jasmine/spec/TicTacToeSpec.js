describe('TicTacToe', function (){

  describe('The Player can ', function(){
    it('have a turn and option is added to the array', function() {
      player1 = new Player('Helen')
      player2 = new Player('Dan')
      game = new TicTacToe(player1, player2);
      game.turn('x', 0);
      expect(game.ticArray[0]).toEqual('x');
    });

   describe('The turn method ', function(){
    it('lowers number of available fields in a game', function() {
      player1 = new Player('Helen')
      player2 = new Player('Dan')
      game = new TicTacToe(player1, player2);
      game.turn('x', 0);
      expect(game.availableFields).toEqual(8);
    });
  });

  });
  });
