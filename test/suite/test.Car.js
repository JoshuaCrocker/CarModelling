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

    it('should have a default heading of (1, 0)', function() {
      var c = new Car();
      c.heading.should.be.an.instanceOf(Vector2D);
      c.heading.getX().should.be.exactly(1).and.be.a.Number();
      c.heading.getY().should.be.exactly(0).and.be.a.Number();
    });

    it('should have a default engineForce of 100', function() {
      var c = new Car();
      c.should.have.property('engineForce', 100);
    });

    it('should calculate the traction force', function() {
      var c = new Car();
      var traction = c.getTractionForce();

      traction.getX().should.be.exactly(100).and.be.a.Number();
      traction.getY().should.be.exactly(0).and.be.a.Number();
    });
  });

  describe('#getDragForce()', function() {
    it('should have a DRAG property (value: 0.4257)', function() {
      var c = new Car();
      c.should.have.property('DRAG', 0.4257);
    });

    it('should calculate the drag given the currentVelocity', function() {
      var c = new Car();
      c.currentVelocity = new Vector2D(4, 3);

      (c.getDragForce().getX()).should.be.approximately(-8.514, 0.001).and.be.a.Number();
      (c.getDragForce().getY()).should.be.approximately(-6.3855, 0.001).and.be.a.Number();
    });
  });

  describe('#getRollingResistanceForce()', function() {
    it('should have a ROLL_RESIST property (value: 12.771)', function() {
      var c = new Car();
      c.should.have.property('ROLL_RESIST', 12.771);
    });

    it('should calulate the rolling resistance given the currentVelocity', function() {
      var c = new Car();
      c.currentVelocity = new Vector2D(4, 3);

      (c.getRollingResistanceForce().getX()).should.be.approximately(-51.084, 0.001).and.be.a.Number();
      (c.getRollingResistanceForce().getY()).should.be.approximately(-38.313, 0.001).and.be.a.Number();
    });
  });

  describe('#getLongitudinalForce()', function() {
    it('should calculate the longitudinal force', function() {
      var c = new Car();
      c.currentVelocity = new Vector2D(4, 3);

      var tractionX = 100;
      var tractionY = 0;
      var dragX = -8.514;
      var dragY = -6.3855;
      var rollX = -51.084;
      var rollY = -38.313;

      var longitudinalX = tractionX + dragX + rollX;
      var longitudinalY = tractionY + dragY + rollY;

      (c.getLongitudinalForce().getX()).should.be.approximately(longitudinalX, 0.001).and.be.a.Number();
      (c.getLongitudinalForce().getY()).should.be.approximately(longitudinalY, 0.001).and.be.a.Number();
    });
  });

  describe('#getAcceleration()', function() {
    it('should calculate the acceleration', function() {
      var c = new Car();
      c.currentVelocity = new Vector2D(4, 3);

      (c.getAcceleration().getX()).should.be.approximately(0.337, 0.001).and.be.a.Number();
      (c.getAcceleration().getY()).should.be.approximately(-0.373, 0.001).and.be.a.Number();
    });
  });

  describe('#getVelocity()', function() {
    it('should calculate the velocity', function() {
      var c = new Car();
      c.currentVelocity = new Vector2D(4, 3);

      var vel = c.getVelocity();

      (vel.getX()).should.be.approximately(1.347, 0.001).and.be.a.Number();
      (vel.getY()).should.be.approximately(-1.118, 0.001).and.be.a.Number();
    });
  });
});
