/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tweetnacl-util";
exports.ids = ["vendor-chunks/tweetnacl-util"];
exports.modules = {

/***/ "(ssr)/./node_modules/tweetnacl-util/nacl-util.js":
/*!**************************************************!*\
  !*** ./node_modules/tweetnacl-util/nacl-util.js ***!
  \**************************************************/
/***/ (function(module) {

eval("// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.\n// Public domain.\n(function(root, f) {\n  'use strict';\n  if ( true && module.exports) module.exports = f();\n  else if (root.nacl) root.nacl.util = f();\n  else {\n    root.nacl = {};\n    root.nacl.util = f();\n  }\n}(this, function() {\n  'use strict';\n\n  var util = {};\n\n  function validateBase64(s) {\n    if (!(/^(?:[A-Za-z0-9+\\/]{2}[A-Za-z0-9+\\/]{2})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$/.test(s))) {\n      throw new TypeError('invalid encoding');\n    }\n  }\n\n  util.decodeUTF8 = function(s) {\n    if (typeof s !== 'string') throw new TypeError('expected string');\n    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);\n    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);\n    return b;\n  };\n\n  util.encodeUTF8 = function(arr) {\n    var i, s = [];\n    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));\n    return decodeURIComponent(escape(s.join('')));\n  };\n\n  if (typeof atob === 'undefined') {\n    // Node.js\n\n    if (typeof Buffer.from !== 'undefined') {\n       // Node v6 and later\n      util.encodeBase64 = function (arr) { // v6 and later\n          return Buffer.from(arr).toString('base64');\n      };\n\n      util.decodeBase64 = function (s) {\n        validateBase64(s);\n        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));\n      };\n\n    } else {\n      // Node earlier than v6\n      util.encodeBase64 = function (arr) { // v6 and later\n        return (new Buffer(arr)).toString('base64');\n      };\n\n      util.decodeBase64 = function(s) {\n        validateBase64(s);\n        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));\n      };\n    }\n\n  } else {\n    // Browsers\n\n    util.encodeBase64 = function(arr) {\n      var i, s = [], len = arr.length;\n      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));\n      return btoa(s.join(''));\n    };\n\n    util.decodeBase64 = function(s) {\n      validateBase64(s);\n      var i, d = atob(s), b = new Uint8Array(d.length);\n      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);\n      return b;\n    };\n\n  }\n\n  return util;\n\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHdlZXRuYWNsLXV0aWwvbmFjbC11dGlsLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUE2QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFO0FBQzNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9jLWZyZWlnaHRlci8uL25vZGVfbW9kdWxlcy90d2VldG5hY2wtdXRpbC9uYWNsLXV0aWwuanM/ODg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIGluIDIwMTQtMjAxNiBieSBEbWl0cnkgQ2hlc3RueWtoIGFuZCBEZXZpIE1hbmRpcmkuXG4vLyBQdWJsaWMgZG9tYWluLlxuKGZ1bmN0aW9uKHJvb3QsIGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZigpO1xuICBlbHNlIGlmIChyb290Lm5hY2wpIHJvb3QubmFjbC51dGlsID0gZigpO1xuICBlbHNlIHtcbiAgICByb290Lm5hY2wgPSB7fTtcbiAgICByb290Lm5hY2wudXRpbCA9IGYoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciB1dGlsID0ge307XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVCYXNlNjQocykge1xuICAgIGlmICghKC9eKD86W0EtWmEtejAtOStcXC9dezJ9W0EtWmEtejAtOStcXC9dezJ9KSooPzpbQS1aYS16MC05K1xcL117Mn09PXxbQS1aYS16MC05K1xcL117M309KT8kLy50ZXN0KHMpKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBlbmNvZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIHV0aWwuZGVjb2RlVVRGOCA9IGZ1bmN0aW9uKHMpIHtcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBzdHJpbmcnKTtcbiAgICB2YXIgaSwgZCA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzKSksIGIgPSBuZXcgVWludDhBcnJheShkLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMDsgaSA8IGQubGVuZ3RoOyBpKyspIGJbaV0gPSBkLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGI7XG4gIH07XG5cbiAgdXRpbC5lbmNvZGVVVEY4ID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgdmFyIGksIHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShhcnJbaV0pKTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShzLmpvaW4oJycpKSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBhdG9iID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE5vZGUuanNcblxuICAgIGlmICh0eXBlb2YgQnVmZmVyLmZyb20gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgLy8gTm9kZSB2NiBhbmQgbGF0ZXJcbiAgICAgIHV0aWwuZW5jb2RlQmFzZTY0ID0gZnVuY3Rpb24gKGFycikgeyAvLyB2NiBhbmQgbGF0ZXJcbiAgICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oYXJyKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICB9O1xuXG4gICAgICB1dGlsLmRlY29kZUJhc2U2NCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHZhbGlkYXRlQmFzZTY0KHMpO1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoQnVmZmVyLmZyb20ocywgJ2Jhc2U2NCcpLCAwKSk7XG4gICAgICB9O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vZGUgZWFybGllciB0aGFuIHY2XG4gICAgICB1dGlsLmVuY29kZUJhc2U2NCA9IGZ1bmN0aW9uIChhcnIpIHsgLy8gdjYgYW5kIGxhdGVyXG4gICAgICAgIHJldHVybiAobmV3IEJ1ZmZlcihhcnIpKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICB9O1xuXG4gICAgICB1dGlsLmRlY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgdmFsaWRhdGVCYXNlNjQocyk7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuZXcgQnVmZmVyKHMsICdiYXNlNjQnKSwgMCkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2Vyc1xuXG4gICAgdXRpbC5lbmNvZGVCYXNlNjQgPSBmdW5jdGlvbihhcnIpIHtcbiAgICAgIHZhciBpLCBzID0gW10sIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGFycltpXSkpO1xuICAgICAgcmV0dXJuIGJ0b2Eocy5qb2luKCcnKSk7XG4gICAgfTtcblxuICAgIHV0aWwuZGVjb2RlQmFzZTY0ID0gZnVuY3Rpb24ocykge1xuICAgICAgdmFsaWRhdGVCYXNlNjQocyk7XG4gICAgICB2YXIgaSwgZCA9IGF0b2IocyksIGIgPSBuZXcgVWludDhBcnJheShkLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZC5sZW5ndGg7IGkrKykgYltpXSA9IGQuY2hhckNvZGVBdChpKTtcbiAgICAgIHJldHVybiBiO1xuICAgIH07XG5cbiAgfVxuXG4gIHJldHVybiB1dGlsO1xuXG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tweetnacl-util/nacl-util.js\n");

/***/ })

};
;