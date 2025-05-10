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

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}
function angle(x1, y1, x2, y2) {
    var angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
function rotate(x, y, angle) {
    var rad = deg2rad(angle);
    var x1 = x * Math.cos(rad) - y * Math.sin(rad);
    var y1 = x * Math.sin(rad) + y * Math.cos(rad);
    return [x1, y1];
}

var c = document.getElementById("shape");
var x = Math.round(c.clientWidth / 2);
var y = Math.round(c.clientHeight / 2);

var rotate = 0;


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
    x += Math.round(radius * Math.sin(deg2rad(alfa+rotate)));
    y -= Math.round(radius * Math.cos(deg2rad(alfa+rotate)));
    ctx2.strokeStyle = "rgba("+ Math.floor((alfa / 360 ) * 255) +", "+  Math.floor((alfa / 360 ) * 255) +", 255, 80%)";
    ctx2.fillStyle = "rgba("+ Math.floor((alfa / 360 ) * 255) +", "+  Math.floor((alfa / 360 ) * 255) +", 255, 80%)";
    coordinate.push({x: x, y: y});
    ctx2.lineTo(x, y);
    ctx2.stroke();
    ctx2.closePath();
    setTimeout(function () {
        ctx2.style.transform = "rotate(" + (alfa + rotate) + "deg)";
        ctx2.style.transition = "transform 0.5s ease-in-out";

        ctx2.style.transformOrigin = "50% 50%";
    }, 100);
}
var X = x;
var Y = y;
var alfa = 0;
var radius = 100;
var L = radius;
var A2 = a_2(radius);
var H = h(radius);
var l = L;
var Gravity = 9.8;
var g = Gravity * 0.1; // 0.1 m/s^2
var t = 0.1; // 0.1 s
var v = 0; // initial velocity
var a = 0; // initial acceleration
var A = 0; // initial angle
var A1 = 0; // initial angle
var A2 = 0; // initial angle
var A3 = 0; // initial angle
var A4 = 0; // initial angle
var A5 = 0; // initial angle
var A6 = 0; // initial angle
var A7 = 0; // initial angle
var A8 = 0; // initial angle
var A9 = 0; // initial angle
var A10 = 0; // initial angle
var gestosc = 0.1; // density of the fluid
var gestosc2 = 0.1; // density of the fluid
var objetosc = 0.1; // volume of the object
var speed = 0.1; // speed of the object
var acceleration = 0.1; // acceleration of the object

var force = 0.1; // force acting on the object
var moment = 0.1; // moment acting on the object
var torque = 0.1; // torque acting on the object
var buoyancy = 0.1; // buoyancy acting on the object
var drag = 0.1; // drag acting on the object
var lift = 0.1; // lift acting on the object
var thrust = 0.1; // thrust acting on the object
var drag_force = 0.1; // drag force acting on the object


function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx2.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx2.beginPath();
    ctx.fillStyle = "#FFA500";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.closePath();
    ctx2.closePath();
}
function draw2() {
    ctx2.clearRect(0, 0, c.width, c.height);
    ctx2.beginPath();
    ctx.fillStyle = "#FFA500";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx2.closePath();
}

function velocity() {
    v = v + a * t;
    a = g * Math.sin(deg2rad(A));
    A = A + a * t;
    A1 = A1 + a * t;
    A2 = A2 + a * t;
    A3 = A3 + a * t;
    A4 = A4 + a * t;
    A5 = A5 + a * t;
    A6 = A6 + a * t;
    A7 = A7 + a * t;
    A8 = A8 + a * t;
    A9 = A9 + a * t;
    A10 = A10 + a * t;
}

function acceleration() {
    a = g * Math.sin(deg2rad(A));
    A = A + a * t;
    A1 = A1 + a * t;
    A2 = A2 + a * t;
    A3 = A3 + a * t;
    A4 = A4 + a * t;
    A5 = A5 + a * t;
    A6 = A6 + a * t;
    A7 = A7 + a * t;
    A8 = A8 + a * t;
    A9 = A9 + a * t;
    A10 = A10 + a * t;
}
function force() {
    var F = 0;
    var F1 = 0;
    var F2 = 0;
    var F3 = 0;
    var F4 = 0;
    var F5 = 0;
    var F6 = 0;
    var F7 = 0;
    var F8 = 0;
    var F9 = 0;
    var F10 = 0;
}
function moment() {
    var M = 0;
    var M1 = 0;
    var M2 = 0;
    var M3 = 0;
    var M4 = 0;
    var M5 = 0;
    var M6 = 0;
    var M7 = 0;
    var M8 = 0;
    var M9 = 0;
    var M10 = 0;
}
function torque() {
    var T = 0;
    var T1 = 0;
    var T2 = 0;
    var T3 = 0;
    var T4 = 0;
    var T5 = 0;
    var T6 = 0;
    var T7 = 0;
    var T8 = 0;
    var T9 = 0;
    var T10 = 0;
}
function buoyancy() {
    var B = 0;
    var B1 = 0;
    var B2 = 0;
    var B3 = 0;
    var B4 = 0;
    var B5 = 0;
    var B6 = 0;
    var B7 = 0;
    var B8 = 0;
    var B9 = 0;
    var B10 = 0;
}
function drag() {
    var D = 0;
    var D1 = 0;
    var D2 = 0;
    var D3 = 0;
    var D4 = 0;
    var D5 = 0;
    var D6 = 0;
    var D7 = 0;
    var D8 = 0;
    var D9 = 0;
    var D10 = 0;
}
function lift() {
    var L = 0;
    var L1 = 0;
    var L2 = 0;
    var L3 = 0;
    var L4 = 0;
    var L5 = 0;
    var L6 = 0;
    var L7 = 0;
    var L8 = 0;
    var L9 = 0;
    var L10 = 0;
}
function thrust() {
    var T = 0;
    var T1 = 0;
    var T2 = 0;
    var T3 = 0;
    var T4 = 0;
    var T5 = 0;
    var T6 = 0;
    var T7 = 0;
    var T8 = 0;
    var T9 = 0;
    var T10 = 0;
}
// Removed duplicate drag_force function to avoid redundancy
// Removed duplicate lift_force function to avoid redundancy
function thrust_force() {
    var T = 0;
    var T1 = 0;
    var T2 = 0;
    var T3 = 0;
    var T4 = 0;
    var T5 = 0;
    var T6 = 0;
    var T7 = 0;
    var T8 = 0;
    var T9 = 0;
    var T10 = 0;
}
function buoyancy_force() {
    var B = 0;
    var B1 = 0;
    var B2 = 0;
    var B3 = 0;
    var B4 = 0;
    var B5 = 0;
    var B6 = 0;
    var B7 = 0;
    var B8 = 0;
    var B9 = 0;
    var B10 = 0;
}

function drag_force() {
    var D = 0;
    var D1 = 0;
    var D2 = 0;
    var D3 = 0;
    var D4 = 0;
    var D5 = 0;
    var D6 = 0;
    var D7 = 0;
    var D8 = 0;
    var D9 = 0;
    var D10 = 0;


}
function lift_force() { 
    var L = 0;
    var L1 = 0;
    var L2 = 0;
    var L3 = 0;
    var L4 = 0;
    var L5 = 0;
    var L6 = 0;
    var L7 = 0;
    var L8 = 0;
    var L9 = 0;
    var L10 = 0;
}
function thrust_force() {
    var T = 0;
    var T1 = 0;
    var T2 = 0;
    var T3 = 0;
    var T4 = 0;
    var T5 = 0;
    var T6 = 0;
    var T7 = 0;
    var T8 = 0;
    var T9 = 0;
    var T10 = 0;
}

function initializePosition() {
    var x = 0;
    var y = 0;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;
    var x4 = 0;
    var y4 = 0;
    var x5 = 0;
    var y5 = 0;
    var x6 = 0;
    var y6 = 0;
    var x7 = 0;
    var y7 = 0;
    var x8 = 0;
    var y8 = 0;
}

    
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
// ctx2.rotate(Math.PI / 2);

var ship = document.body.getElementsByClassName('ship')[0];
ship.style.position = "absolute";
// ship = ship[0];
var old_x = 0;
var old_y = 0;
var frame_id = 0;
var fps = 60;
console.clear();
coordinate.forEach((item, i) => {
//   console.log
//   console.log(item);
  setTimeout(function () {

    if (i == 0) {
        old_x = 0;
        old_y = 0;
    }
    else {
        old_x = coordinate[i-1]['x']; // ? coordinate[i-1]['x'] : 0;
        old_y = coordinate[i-1]['y']; // ? coordinate[i-1]['y'] : 0;
    }
    var new_x = item['x'] - ship.clientWidth;// - old_x - ship.clientWidth / 2;
    var new_y = item['y'];// - old_y - ship.clientHeight / 2;
    var distance_x = Math.abs(new_x - old_x);
    var distance_y = Math.abs(new_y - old_y);
    var distance = Math.sqrt(Math.pow(distance_x, 2) + Math.pow(distance_y, 2));
    var angle = Math.atan2(distance_y, distance_x) * (180 / Math.PI);
    var velocity = 0.1; // pixels per millisecond
    var time = distance / velocity; // milliseconds
    console.log("distance: " + distance + "px, angle: " + angle + "deg, time: " + time + "ms");

    for (let t = 0; t < time; t++) {
        // var x_i = old_x + (distance_x / time) * t;
        frame_id++;
        var x_i = old_x + (distance_x / time) * t;
        var y_i = old_y + (distance_y / time) * t;
        setTimeout(function () {
            ship.style.left = x_i + "px";
            ship.style.top = y_i + "px";
        }, 100);
    }
    // for (var x_i = old_x; x_i <= new_x + ship.clientWidth; x_i++) {
    //     for (var y_i = old_y; y_i <= new_y + ship.clientHeight; y_i++) {
    //         frame_id++;
    //         setTimeout(function () {
    //             ship.style.left = x_i + "px";
    //             ship.style.top = y_i + "px";
    //             // console.log("x_i: " + x_i + "px, y_i: " + y_i + "px");
    //         }, 10);
            
    //     }
    // }
            
    // setTimeout(function () {
    //     ship.style.left = new_x + "px";
    //     ship.style.top = new_y + "px";
    // }, i * 100);
    // console.log("new_x: " + new_x + "px, new_y: " + new_y + "px");
    // ship.style.transform = "translate(" + new_x + "px, " + new_y + "px)"; // rotate(" + (i * 30) + "deg)";
    // console.log("left: " + -item['x'] + "px");
    // console.log("translate(" + new_x + "px, " + new_y + "px)");
  }, 100);
});

