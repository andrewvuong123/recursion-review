// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '{') {
    return parseObj(json);
  } else if (json[0] === '[') {
    return parseArray(json);
  } else if (json[0] === '"') {
    return parseStr(json);
  } else if (!isNaN(json)) {
    return Number(json);
  } else if (json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  }
};

var parseArray = function(arr) {
  var result = [];
  if (arr === '[]') {
    return [];
  }
  let array = arr.slice(1, arr.length - 1).split(',');
  for (let i = 0; i < array.length; i++) {
    result.push(parseJSON(array[i]));
  }
  return result;
};

var parseObj = function(obj) {
  if (obj === '{}') {
    return {};
  }
};

var parseStr = function(str) {
  return str.slice(1, str.length - 1);
};