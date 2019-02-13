var nx = require('next-js-core2');
require('../src/next-deep-clone');

test('nx.deepClone', function() {
  var obj2 = { email: '1290657123@qq.com' };
  // console.log(nx.deepClone(obj2));
  expect(nx.deepClone(obj2)).toEqual({ email: '1290657123@qq.com' });
});
