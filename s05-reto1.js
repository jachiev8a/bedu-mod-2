
function Vec(x, y) {
  
  this.x = x;
  this.y = y;
  
  this.plus = function(obj){
    return new Vec(this.x + obj.x,this.y + obj.y)
  }
  
  this.minus = function(obj){
    return new Vec(this.x - obj.x,this.y - obj.y)
  }
  
  this.length = function(obj){
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec1.length());