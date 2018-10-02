var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// precede objects with fillStyle for specific colors in objects
// c.fillStyle = "rgba(255, 255, 0, .5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 55, .5)";
// c.fillRect(100, 400, 100, 200);
// c.fillStyle = "rgba(0, 0, 255, .5)";
// c.fillRect(400, 100, 100, 100);

// line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.lineTo(300, 400);
// c.strokeStyle = "purple";
// c.stroke();

// arc/circle

//begin any new arc or line with begin path to separate from
// previous line
// for (var i = 0; i < 50; i++) {
//   let x = Math.random() * window.innerWidth
//   let y = Math.random() * window.innerHeight
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "yellow";
    c.stroke();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var x = Math.random() * innerWidth;
var y = Math.random() * innerWidth;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;

var circleArray = [];

for (let i = 0; i < 100; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerWidth;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray)

var circle = new Circle(200, 200, 3, 3, 30);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update()
  }
  circle.update();
}

animate();
