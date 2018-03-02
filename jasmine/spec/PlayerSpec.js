describe('Player', function (){

  describe('The Player can be crated with', function(){
    it(' a name', function() {
      player1 = new Player('Helen')
      expect(player1.name).toEqual('Helen');
    });

  });
  });
