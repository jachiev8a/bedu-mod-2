
function Triangle (a,b,c) {
  
  this.a = a;
  this.b = b;
  this.c = c;

  this.getPerimeter = function() {
    return (a + b + c);
  }

}

var triangle = new Triangle(1, 2, 3);
console.log(triangle.getPerimeter());