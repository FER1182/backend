"use strict";

var colorRandom = function colorRandom() {
  var a = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var c = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  return "rgb(" + a.toString() + "," + b.toString() + "," + b.toString() + ")";
}; //ES6


module.exports = colorRandom;