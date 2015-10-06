var Playgrounds = function(name, slides, swings, jGyms) {
  this.name = name;
  this.slides = slides;
  this.swings = swings;
  this.jGyms = jGyms;
};

// object prototype
Playgrounds.prototype.display = function() {
  return this.name + " has " + this.slides + " slides, " +
         this.swings + " swings and " + this.jGyms + " jungle gyms.";
};

Playgrounds.prototype.toString = function() {
  var result = [];

  for (var prop in this) {
    result += "Playgrounds." + prop + " = " + this[prop] + "\n";
  }
  return result;
};

var park = new Playgrounds('The Delridge Playground', 2, 4, 1);
console.log(park.display());
console.log(park.toString());

module.exports = Playgrounds;
