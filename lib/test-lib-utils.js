(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("test-lib-utils", [], factory);
	else if(typeof exports === 'object')
		exports["test-lib-utils"] = factory();
	else
		root["test-lib-utils"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatMap = flatMap;
exports.partition = partition;
exports.areEqual = areEqual;
exports.getLast = getLast;
exports.sumForField = sumForField;
exports.deduplicate = deduplicate;

function flatMap(fn, arr) {
  return arr.map(function (item, idx) {
    return fn(item, idx);
  }).reduce(function (acc, curr) {
    return acc.concat(curr);
  }, []);
}

function partition(predicate, arr) {
  var positives = [];
  var negatives = [];
  arr.forEach(function (item, index) {
    return predicate(item, index) ? positives.push(item) : negatives.push(item);
  });
  return [positives, negatives];
}

function areEqual(a1, a2) {
  if (!a1 || !a2) return false;
  if (a1.length !== a2.length) return false;

  if (a1.some(function (el) {
    return a2.includes(el) === false;
  }) || a2.some(function (el) {
    return a1.includes(el) === false;
  })) {
    return false;
  }

  return true;
}

function getLast(arr) {
  return arr[arr.length - 1];
}

function sumForField(fieldName, arr) {
  return arr.reduce(function (acc, curr) {
    return curr[fieldName] ? acc + curr[fieldName] : acc;
  }, 0);
}

function deduplicate(arr, idName) {
  var idMap = {}; // Arr is array of primitive data type elements

  if (!idName) {
    return arr.filter(function (item) {
      var isUniqueItem = !idMap[item];
      idMap[item] = true;
      return isUniqueItem;
    });
  } // Arr is array of objects


  return arr.filter(function (item) {
    if (item[idName] == undefined) return true;
    var isUniqueItem = !idMap[item[idName]];
    idMap[item[idName]] = true;
    return isUniqueItem;
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.array = void 0;

var array = _interopRequireWildcard(__webpack_require__(/*! ./array */ "./src/array.js"));

exports.array = array;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWxpYi11dGlscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdGVzdC1saWItdXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1saWItdXRpbHMvLi9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGVzdC1saWItdXRpbHMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZmxhdE1hcCIsImZuIiwiYXJyIiwibWFwIiwiaXRlbSIsImlkeCIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJjb25jYXQiLCJwYXJ0aXRpb24iLCJwcmVkaWNhdGUiLCJwb3NpdGl2ZXMiLCJuZWdhdGl2ZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJwdXNoIiwiYXJlRXF1YWwiLCJhMSIsImEyIiwibGVuZ3RoIiwic29tZSIsImVsIiwiaW5jbHVkZXMiLCJnZXRMYXN0Iiwic3VtRm9yRmllbGQiLCJmaWVsZE5hbWUiLCJkZWR1cGxpY2F0ZSIsImlkTmFtZSIsImlkTWFwIiwiZmlsdGVyIiwiaXNVbmlxdWVJdGVtIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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R0FBYyxJQUFkO0FBQ0EsYUFBTzJCLFlBQVA7QUFDRCxLQUpNLENBQVA7QUFLRCxHQVZxQyxDQVl0Qzs7O0FBQ0EsU0FBTzdCLEdBQUcsQ0FBQzRCLE1BQUosQ0FBWSxVQUFBMUIsSUFBSSxFQUFJO0FBQ3pCLFFBQUdBLElBQUksQ0FBQ3dCLE1BQUQsQ0FBSixJQUFnQkksU0FBbkIsRUFBOEIsT0FBTyxJQUFQO0FBRTlCLFFBQU1ELFlBQVksR0FBRyxDQUFDRixLQUFLLENBQUN6QixJQUFJLENBQUN3QixNQUFELENBQUwsQ0FBM0I7QUFDQUMsU0FBSyxDQUFDekIsSUFBSSxDQUFDd0IsTUFBRCxDQUFMLENBQUwsR0FBc0IsSUFBdEI7QUFDQSxXQUFPRyxZQUFQO0FBQ0QsR0FOTSxDQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlESCIsImZpbGUiOiJ0ZXN0LWxpYi11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGVzdC1saWItdXRpbHNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGVzdC1saWItdXRpbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGVzdC1saWItdXRpbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gZmxhdE1hcChmbiwgYXJyKSB7XG4gICAgcmV0dXJuIGFyclxuICAgICAgLm1hcCgoaXRlbSwgaWR4KSA9PiBmbihpdGVtLCBpZHgpKVxuICAgICAgLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MuY29uY2F0KGN1cnIpLCBbXSk7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb24ocHJlZGljYXRlLCBhcnIpIHtcbiAgICBjb25zdCBwb3NpdGl2ZXMgPSBbXTtcbiAgICBjb25zdCBuZWdhdGl2ZXMgPSBbXTtcbiAgXG4gICAgYXJyLmZvckVhY2goXG4gICAgICAoaXRlbSwgaW5kZXgpID0+XG4gICAgICAgIHByZWRpY2F0ZShpdGVtLCBpbmRleCkgPyBwb3NpdGl2ZXMucHVzaChpdGVtKSA6IG5lZ2F0aXZlcy5wdXNoKGl0ZW0pXG4gICAgKTtcbiAgXG4gICAgcmV0dXJuIFtwb3NpdGl2ZXMsIG5lZ2F0aXZlc107XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBhcmVFcXVhbChhMSwgYTIpIHtcbiAgICBpZiAoIWExIHx8ICFhMikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChhMS5sZW5ndGggIT09IGEyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICBcbiAgICBpZiAoXG4gICAgICBhMS5zb21lKGVsID0+IGEyLmluY2x1ZGVzKGVsKSA9PT0gZmFsc2UpIHx8XG4gICAgICBhMi5zb21lKGVsID0+IGExLmluY2x1ZGVzKGVsKSA9PT0gZmFsc2UpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhc3QoYXJyKSB7XG4gICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBzdW1Gb3JGaWVsZChmaWVsZE5hbWUsIGFycikge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgIHJldHVybiBjdXJyW2ZpZWxkTmFtZV0gPyBhY2MgKyBjdXJyW2ZpZWxkTmFtZV0gOiBhY2M7XG4gICAgfSwgMCk7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWR1cGxpY2F0ZShhcnIsIGlkTmFtZSl7XG4gICAgY29uc3QgaWRNYXAgPSB7fTtcbiAgXG4gICAgLy8gQXJyIGlzIGFycmF5IG9mIHByaW1pdGl2ZSBkYXRhIHR5cGUgZWxlbWVudHNcbiAgICBpZighaWROYW1lKXtcbiAgICAgIHJldHVybiBhcnIuZmlsdGVyKCBpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaXNVbmlxdWVJdGVtID0gIWlkTWFwW2l0ZW1dO1xuICAgICAgICBpZE1hcFtpdGVtXSA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1VuaXF1ZUl0ZW07XG4gICAgICB9KSAgXG4gICAgfVxuICBcbiAgICAvLyBBcnIgaXMgYXJyYXkgb2Ygb2JqZWN0c1xuICAgIHJldHVybiBhcnIuZmlsdGVyKCBpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW1baWROYW1lXSA9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgICAgXG4gICAgICBjb25zdCBpc1VuaXF1ZUl0ZW0gPSAhaWRNYXBbaXRlbVtpZE5hbWVdXTtcbiAgICAgIGlkTWFwW2l0ZW1baWROYW1lXV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGlzVW5pcXVlSXRlbTtcbiAgICB9KVxuICB9ICAiLCJpbXBvcnQgKiBhcyBhcnJheSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHsgYXJyYXkgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=