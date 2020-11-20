(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.deepClone', function () {
      const obj = { email: '1290657123@qq.com' };
      expect(nx.deepClone(obj)).toEqual({ email: '1290657123@qq.com' });
    });
  });
})();
