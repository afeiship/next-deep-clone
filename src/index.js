(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var ARRAY_TYPE = '[object Array]';
  var OBJECT = 'object';
  var toString = Object.prototype.toString;

  nx.deepClone = function (inObject) {
    var result;

    //null/undefind/false or other primitive vaule:
    if (typeof inObject !== OBJECT || !inObject) {
      return inObject;
    }

    //array:
    if (ARRAY_TYPE === toString.apply(inObject)) {
      result = [];
      nx.forEach(inObject, function (value, i) {
        result[i] = nx.deepClone(value);
      });
      return result;
    }

    //object:
    result = {};
    nx.forIn(inObject, function (key, value) {
      result[key] = nx.deepClone(value);
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepClone;
  }
})();
