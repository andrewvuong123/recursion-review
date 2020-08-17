// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  result = '';
  if (Array.isArray(obj)) {
    result += stringifyArray(obj);
  } else if (typeof obj === 'object') {
    result += stringifyObj(obj);
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else {
    result += obj;
  }
  return result;
};

// helper fcn array
var stringifyArray = function(arr) {
  var result = [];
  if (arr.length === 0) {
    return '[]';
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(stringifyJSON(arr[i]));
  }
  return '[' + result + ']';
};
// helper fcn objects
var stringifyObj = function(obj) {
  var result = [];
  if (obj === null) {
    return 'null';
  } else if (obj === {}) {
    return '{}';
  } else {
    for (let key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        return '{}';
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  return '{' + result + '}';
};