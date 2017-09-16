describe('Car', function() {
  describe('#getMass()', function() {
    it('should have a default BASE_MASS of 100', function() {
      var c = new Car();
      c.should.have.property('BASE_MASS', 100);
    });

    it('should have a default fuelMass of 20', function() {
      var c = new Car();
      c.should.have.property('fuelMass', 20);
    });

    it('should calculate the sum of Car.BASS_MASS and Car.fuelMass', function() {
      var c = new Car();
      (c.getMass()).should.be.exactly(120).and.be.a.Number();
    });
  });

  describe('#getTractionForce()', function() {
    it('should return a Vector2D instance', function() {
      var c = new Car();
      (c.getTractionForce()).should.be.an.instanceOf(Vector2D);
    });

    it('should calculate the traction force', function() {
      // NYI
    });
  });
});
