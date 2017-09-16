function Vector2D(x, y) {
  if (x === undefined) console.error("x is undefined");
  if (y === undefined) console.error("y is undefined");

  var vector = [x, y];

  this.setX = function(x) {
    vector[0] = x;
  }

  this.getX = function() {
    return vector[0];
  }

  this.setY = function(y) {
    vector[1] = y;
  }

  this.getY = function() {
    return vector[1];
  }

  this.getVector = function() {
    return vector;
  }

  this.magnitude = function() {
    return Math.sqrt(
      Math.pow(this.getX(), 2) +
      Math.pow(this.getY(), 2)
    );
  }

  this.unit = function() {
    var ux = this.getX() / this.magnitude();
    var uy = this.getY() / this.magnitude();

    return new Vector2D(ux, uy);
  }
}
