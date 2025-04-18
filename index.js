// convert angle from deg to radial using rule rad = angle * PI / 180

function deg2rad(angle) {
    return ((angle * Math.PI) / 180);
}

function a(radius) {
    return radius;
}
function h(radius) {
    return ((radius * Math.sqrt(3)) / 2);
}
function a_2(radius) {
    return (radius / 2);
}

function area(radius) {
    return (6 * a(radius) * h(radius) / 2);
}

var c = document.getElementById("shape");
var x = Math.round(c.clientWidth / 2);
var y = Math.round(c.clientHeight / 2);

var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
ctx2.moveTo(x, y);
ctx.moveTo(x, y);
var coordinate = [];
function cords(alfa, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    x += Math.round(radius * Math.sin(deg2rad(alfa)));
    y -= Math.round(radius * Math.cos(deg2rad(alfa)));
    ctx.strokeStyle = "rgba("+ ( 255 - Math.floor((alfa / 360 ) * 255)) +", "+  Math.floor((alfa / 360 ) * 255) +", "+ (255 - Math.floor((alfa / 360 ) * 255)) +", 80%)";
    ctx.fillStyle = "rgba("+ ( 255 - Math.floor((alfa / 360 ) * 255)) +", "+  Math.floor((alfa / 360 ) * 255) +", "+  (255 - Math.floor((alfa / 360 ) * 255)) +", 80%)";
    coordinate.push({x: x, y: y});
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
}

function cords2(alfa, radius) {
    ctx2.beginPath();
    ctx2.moveTo(x, y);
    x += Math.round(radius * Math.sin(deg2rad(alfa)));
    y -= Math.round(radius * Math.cos(deg2rad(alfa)));
    ctx2.strokeStyle = "rgba("+ Math.floor((alfa / 360 ) * 255) +", "+  Math.floor((alfa / 360 ) * 255) +", 255, 80%)";
    ctx2.fillStyle = "rgba("+ Math.floor((alfa / 360 ) * 255) +", "+  Math.floor((alfa / 360 ) * 255) +", 255, 80%)";
    coordinate.push({x: x, y: y});
    ctx2.lineTo(x, y);
    ctx2.stroke();
    ctx2.closePath();
}


var X = x;
var Y = y;
var alfa = 0;
var radius = 100;
var L = radius;
var A2 = a_2(radius);
var H = h(radius);
var l = L;

// x += x + H;
// y -= y - H;

ctx.strokeStyle = "#FFA5FF";
ctx.fillStyle = "#FF0000";
cords(0, H);
cords(90, A2);
cords(30, A2);
cords(120, H);
cords(180, H);
cords(90, A2);
cords(150., A2);
cords(240, H);
cords(300, H);
cords(210, A2);
cords(270, L);
cords(330, A2);
cords(60, H);
ctx.fillStyle = 'orange';
ctx.fill();
console.log(coordinate);

x -= radius;
y -= radius;

// ctx2.strokeStyle = "#FFA500";
// ctx2.fillStyle = "#FFA500";

cords2(90, A2);
cords2(150, A2);
cords2(240, H);
cords2(300, H);
cords2(210, A2);
cords2(270, L);
cords2(330, A2);
cords2(60, H);
cords2(0, H);
cords2(90, A2);
cords2(30, A2);
cords2(120, H);
cords2(180, H);
ctx2.rotate(Math.PI / 2);

var ship = document.body.getElementsByClassName('ship')[0];
// ship = ship[0];
coordinate.forEach((item, i) => {
  console.log
  console.log(item);
  setTimeout(function () {
    ship.style.left = item['x'] + "px";
    ship.style.top = item['y'] + "px";
    console.log("left: " + -item['x'] + "px");
  }, i * 1000);
});
