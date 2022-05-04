"use strict";

var _express = _interopRequireDefault(require("express"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const express = require("express")  //commonjs
// es module // es6 //es5
var app = (0, _express["default"])();

var suma = function suma(a, b) {
  return a + b;
}; //ES6


var resta = function resta(a, b) {
  return a - b;
}; //ES6


var multiplica = function multiplica(a, b) {
  return a * b;
}; //ES6


var div = function div(a, b) {
  return a / b;
}; //ES6
//

/* console.log(suma(2,8))
console.log(resta(10,8))
console.log(multiplica(10,8))
console.log(div(10,2))
 */


setInterval(function () {
  console.log((0, _colors["default"])());
}, 1000);
app.listen(8080, function () {
  console.log("server ok");
});