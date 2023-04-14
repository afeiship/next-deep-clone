require('../src');

describe('api.basic test', () => {
  test('nx.deepClone clone and deepEqual', function () {
    const obj = { email: '1290657123@qq.com' };
    expect(nx.deepClone(obj)).toEqual({ email: '1290657123@qq.com' });
  });

  test('nx.deepClone clone and not equal', function () {
    const obj = { email: 'xxx@qq.com' };
    const res = nx.deepClone(obj);
    expect(res === obj).toBe(false);
  });

  test('clone value will not change origin', function () {
    const obj = { email: 'xxx@qq.com' };
    const res = nx.deepClone(obj);
    res.email = 'yyy@163.com';

    expect(obj.email).toBe('xxx@qq.com');
  });
});
