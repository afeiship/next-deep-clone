'use strict';

var ARRAY_TYPE = '[object Array]';
//@const:
var OBJECT = 'object';
var toString = Object.prototype.toString;


function deepClone(inObject) {
  var result, i;

  //null/undefind/false or other primitive vaule:
  if (typeof inObject !== OBJECT || !inObject) {
    return inObject;
  }

  //array:
  if (ARRAY_TYPE === toString.apply(inObject)) {
    result = [];
    var len = inObject.length;
    for (i = 0; i < len; i++){
      result[i] = deepClone(inObject[i]);
    }
    return result;
  }

  //object:
  result = {};
  for (i in inObject) {
    if (inObject.hasOwnProperty(i)) {
      result[i] = deepClone(inObject[i]);
    }
  }
  return result;
}


module.exports = deepClone;



