var expect = require('chai').expect;
var Playgrounds = require('../lib/playground.js');

describe("The playground", function(){
  beforeEach(function() {
    var park = new Playgrounds('The Delridge Playground', 2, 4, 1);
  });

  it("Should have name", function(){
    var park = new Playgrounds('The Delridge Playground', 2, 4, 1);
    expect(park.name).to.equal('The Delridge Playground');
  });

  it("Should describe the playgrounds", function(){
    var park = new Playgrounds('The Delridge Playground', 2, 4, 1);
    var result = "The Delridge Playground has 2 slides, " +
         "4 swings and 1 jungle gyms.";
    expect(park.display()).to.equal(result);
  });

  it("Should list the playground's properties", function(){
    var park = new Playgrounds('The Delridge Playground', 2, 4, 1);
    expect(park.toString()).to.include("display");
  });
});
