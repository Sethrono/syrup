(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"$ROOT/src/bar.js":[function(require,module,exports){
module.exports = {
  bar: true
};

},{}],"$ROOT/src/foo.jsx":[function(require,module,exports){
var b = require('./bar');

if (b) var a = 'foobar';

module.exports = {
  foo: b.bar
};

},{"./bar":"$ROOT/src/bar.js"}]},{},["$ROOT/src/foo.jsx"])


//# sourceMappingURL=foo.js.map
