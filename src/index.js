import nx from '@jswork/next';

const OBJECT = 'object';

nx.deepClone = function (inObject) {
  let result;

  //null/undefind/false or other primitive vaule:
  if (typeof inObject !== OBJECT || !inObject) {
    return inObject;
  }

  //array:
  if (Array.isArray(inObject)) {
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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.deepClone;
}

export default nx.deepClone;
