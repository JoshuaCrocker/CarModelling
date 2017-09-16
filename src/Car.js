function Car () {
  this.DRAG = 0.5 * 0.3 * 2.2 * 1.29;
  this.ROLL_RESIST = 30 * this.DRAG;
  this.BASE_MASS = 100;
  this.BRAKE_COEFF = 0.05;

  this.engineForce = 100; // Throttle? / Controlled by user

  this.currentVelocity = new Vector2D(0, 0);
  this.heading = new Vector2D(1, 0);

  this.fuelMass = 20;

  // TODO braking

  this.brake = false;

  this.isBraking = function() {
    return this.brake;
  }

  this.setBraking = function(braking) {
    this.brake = braking ? true : false;
  }

  this.getMass = function() {
    return this.BASE_MASS + this.fuelMass;
  }

  this.getTractionForce = function() {
    return new Vector2D(
      this.heading.unit().getX() * this.engineForce,
      this.heading.unit().getY() * this.engineForce
    );
  }

  this.getBrakingForce = function() {
    return new Vector2D(
      (-1) * this.engineForce * this.BRAKE_COEFF,
      (-1) * this.engineForce * this.BRAKE_COEFF,
    );
  }

  this.getDragForce = function() {
    var velocity = this.currentVelocity;
    var speed = velocity.magnitude();

    return new Vector2D(
      (-1) * this.DRAG * velocity.getX() * speed,
      (-1) * this.DRAG * velocity.getY() * speed
    );
  }

  this.getRollingResistanceForce = function() {
    var velocity = this.currentVelocity;

    return new Vector2D(
      (-1) * this.ROLL_RESIST * velocity.getX(),
      (-1) * this.ROLL_RESIST * velocity.getY()
    );
  }

  this.getLongitudinalForce = function() {
    var traction;

    if (this.isBraking()) {
      traction = this.getBrakingForce();
    } else {
      traction = this.getTractionForce();
    }

    var drag = this.getDragForce();
    var rr = this.getRollingResistanceForce();

    return new Vector2D(
      traction.getX() + drag.getX() + rr.getX(),
      traction.getY() + drag.getY() + rr.getY()
    );
  }

  this.getAcceleration = function() {
    var force = this.getLongitudinalForce();

    return new Vector2D(
      force.getX() / this.getMass(),
      force.getY() / this.getMass()
    );
  }

  this.getVelocity = function() {
    var oldVelocity = this.currentVelocity;
    var acceleration = this.getAcceleration();

    this.currentVelocity = new Vector2D(
      oldVelocity.getX() + acceleration.getX(),
      oldVelocity.getY() + acceleration.getY()
    );

    if (this.currentVelocity.getX() < 0) this.currentVelocity.setX(0);
    if (this.currentVelocity.getY() < 0) this.currentVelocity.setY(0);

    return this.currentVelocity;
  }
}
