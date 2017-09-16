describe('Vector2D', function() {
  describe('Vector2D()', function() {
    it('can take the x and y values', function() {
      var v = new Vector2D(3, 3);

      v.should.be.an.instanceOf(Vector2D);
      (v.getX()).should.be.exactly(3);
      (v.getY()).should.be.exactly(3);
    });

    it('missing parameters default to 0', function() {
      var none = new Vector2D();
      var one = new Vector2D(1);

      none.getX().should.be.exactly(0);
      none.getY().should.be.exactly(0);

      one.getX().should.be.exactly(1);
      one.getY().should.be.exactly(0);
    });
  });

  describe('#setX()', function() {
    it('can set a value', function() {
      var v = new Vector2D();

      v.getX().should.be.exactly(0);
      v.setX(2);
      v.getX().should.be.exactly(2);
    });
  });

  describe('#getX()', function() {
    it('can get a value', function() {
      var v = new Vector2D(4);

      v.getX().should.be.exactly(4);
    });
  });

  describe('#setY()', function() {
    it('can set a value', function() {
      var v = new Vector2D();

      v.getY().should.be.exactly(0);
      v.setY(2);
      v.getY().should.be.exactly(2);
    });
  });

  describe('#getY()', function() {
    it('can get a value', function() {
      var v = new Vector2D(0, 3);

      v.getY().should.be.exactly(3);
    });
  });

  describe('#getVector()', function() {
    it('can set a vector array', function() {
      var v = new Vector2D(3, 4);

      v.getVector().should.be.instanceOf(Array);
      v.getVector()[0].should.be.exactly(3);
      v.getVector()[1].should.be.exactly(4);
    });
  });

  describe('#magnitude()', function() {
    it('can calculate the magnitude', function() {
      var v = new Vector2D(3, 4);

      v.magnitude().should.be.exactly(5).and.be.a.Number();
    });
  });

  describe('#unit()', function() {
    it('can calculate the unit vector', function() {
      var v = new Vector2D(3, 4);

      v.unit().should.be.an.instanceOf(Vector2D);
      v.unit().getX().should.be.exactly(0.6).and.be.a.Number();
      v.unit().getY().should.be.exactly(0.8).and.be.a.Number();
    });

    it('will return a zero vector for the zero vector', function() {
      var v = new Vector2D();

      v.unit().getX().should.be.exactly(0).and.be.a.Number();
      v.unit().getY().should.be.exactly(0).and.be.a.Number();
    })
  });
});
