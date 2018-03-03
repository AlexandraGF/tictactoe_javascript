describe('TicTacToe', function (){

  describe('The Player can ', function(){
    it('have a turn and option is added to the array', function() {
      player1 = new Player('Helen');
      player2 = new Player('Dan');
      game = new TicTacToe(player1, player2);
      game.turn('x', 0);
      expect(game.ticArray[0]).toEqual('x');
    });
  });

   describe('The turn method ', function(){
    it('lowers number of available fields in a game', function() {
      player1 = new Player('Helen');
      player2 = new Player('Dan');
      game = new TicTacToe(player1, player2);
      game.turn('x', 0);
      expect(game.availableFields).toEqual(8);
    });

    it('fullLine method checks if 3 spaces in a row/column/diagonal have the same option x', function() {
      player1 = new Player('Helen');
      player2 = new Player('Dan');
      game = new TicTacToe(player1, player2);
      game.turn('x', 0);
      game.turn('o', 1);
      game.turn('x', 3);
      game.turn('o', 4);
      expect(game.turn('x', 6)).toEqual("Game over! Helen has won!");
    });

    it('full_line method checks if 3 spaces in a row/column/diagonal have the same option o', function() {
      player1 = new Player('Helen');
      player2 = new Player('Dan');
      game = new TicTacToe(player1, player2);
      game.turn('x', 0);
      game.turn('o', 1);
      game.turn('x', 3);
      game.turn('o', 4);
      game.turn('x', 5);
      expect(game.turn('o', 7)).toEqual("Game over! Dan has won!");
      });

      it('available_space method checks if there is any available fields to play', function() {
        player1 = new Player('Helen');
        player2 = new Player('Dan');
        game = new TicTacToe(player1, player2);
        game.turn('x', 5);
        game.turn('o', 4);
        game.turn('x', 7);
        game.turn('o', 3);
        game.turn('x', 1);
        game.turn('o', 2);
        game.turn('x', 6);
        game.turn('o', 8);
        expect(game.turn('x', 0)).toEqual("Game over! No one won! Not available spaces to play");
      });


      it('player can not take a taken field', function() {
        player1 = new Player('Helen');
        player2 = new Player('Dan');
        game = new TicTacToe(player1, player2);
        game.turn('x', 0);
        game.turn('o', 1);
        game.turn('x', 3);
        expect(game.turn('o', 0)).toEqual('Cannot choose a taken field! Please choose another empty field!')
      });
  });

  });
