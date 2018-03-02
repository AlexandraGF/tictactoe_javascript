describe('TicTacToe', function (){

  describe('The Player can ', function(){
    it('have a turn', function() {
      player1 = new Player('Helen')
      player2 = new Player('Dan')
      game = new TicTacToe(player1, player2);
      game.turn('x', 0);
      expect(game.ticArray[0]).toEqual('x');
    });

  });
  });
