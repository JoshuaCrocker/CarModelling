function Car () {
  this.DRAG = 0.5 * 0.3 * 2.2 * 1.29;
  this.ROLL_RESIST = 30 * this.DRAG;
  this.BASE_MASS = 100;

  this.engineForce = 1; // Throttle? / Controlled by user

  var currentVelocity = new Vector2D(0, 0);
  this.heading = new Vector2D(0, 0);

  this.fuelMass = 20;

  // TODO braking

  this.getMass = function() {
    return this.BASE_MASS + this.fuelMass;
  }
  
  this.getTractionForce = function() {
    return new Vector2D(
      this.heading.unit() * this.engineForce,
      this.heading.unit() * this.engineForce
    );
  }

  this.getDragForce = function() {
    var velocity = currentVelocity;
    var speed = velocity.magnitude();

    return new Vector2D(
      (-1) * this.DRAG * velocity.getX() * speed,
      (-1) * this.DRAG * velocity.getY() * speed
    );
  }

  this.getRollingResistanceForce = function() {
    var velocity = currentVelocity;

    return new Vector2D(
      this.ROLL_RESIST * velocity.getX(),
      this.ROLL_RESIST * velocity.getY()
    );
  }

  this.getLongitudinalForce = function() {
    var traction = this.getTractionForce();
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
    var oldVelocity = currentVelocity;
    var acceleration = this.getAcceleration();

    currentVelocity = new Vector2D(
      oldVelocity.getX() * acceleration,
      oldVelocity.getY() * acceleration
    );

    return currentVelocity;
  }
}