var assert = require('assert');
var clone=require('../index');


var bigMap = {
  "parent": {
    "pTlmbh": {
      "0oVwOM": {
        "id": "0oVwOM",
        "parent": "pTlmbh",
        "name": "New node",
        "created_at": 1384289621
      }
    },
    "Fhs2hL": {
      "aHxe8k": {
        "id": "aHxe8k",
        "parent": "Fhs2hL",
        "name": "hjkhjkhjk",
        "created_at": 1384354593
      },
      "pTlmbh": {
        "id": "pTlmbh",
        "parent": "Fhs2hL",
        "name": "New node",
        "created_at": 1384289277
      }
    },
    "root": {
      "Fhs2hL": {
        "id": "Fhs2hL",
        "parent": "root",
        "name": "test",
        "created_at": 1383403881
      },
      "osFIMf": {
        "id": "osFIMf",
        "parent": "root",
        "name": "New node",
        "created_at": 1384354584
      },
      "PsovXE": {
        "id": "PsovXE",
        "parent": "root",
        "name": "hjkhjkhjk",
        "created_at": 1384354589
      },
      "RbXhdJ": {
        "id": "RbXhdJ",
        "parent": "root",
        "name": "empty",
        "created_at": 1384359806
      }
    },
    "0oVwOM": {
      "HYPSgv": {
        "id": "HYPSgv",
        "parent": "0oVwOM",
        "name": "New node",
        "created_at": 1384342657
      }
    }
  },
  "path": [
    ["Fhs2hL"],
    ["Fhs2hL", "aHxe8k"],
    ["Fhs2hL", "pTlmbh"],
    ["Fhs2hL", "pTlmbh", "0oVwOM"],
    ["Fhs2hL", "pTlmbh", "0oVwOM", "HYPSgv"],
    ["osFIMf"],
    ["PsovXE"],
    ["RbXhdJ"]
  ]
};

describe('Clone Methods', function () {

  describe('#clone', function () {
    it('clone empty array:', function () {
      var arr1 = [];
      var arr2 = clone(arr1);
      assert.equal(arr1===arr2, false);
    });

    it('clone empty array:', function () {
      var arr1 = {};
      var arr2 = clone(arr1);
      assert.equal(arr1===arr2, false);
    });

    it('clone simple array && test value:', function () {
      var arr1 = ['test1','test2','test3'];
      var arr2 = clone(arr1);

      assert.equal(arr2[0], 'test1');
      assert.equal(arr2[1], 'test2');
      assert.equal(arr2[2], 'test3');
      assert.equal(arr1===arr2, false);
    });

    it('clone simple object && test value:', function () {
      var obj1 = {test1:'value1',test2:'value2',test3:'value3'};
      var obj2 = clone(obj1);

      assert.equal(obj2.test1, 'value1');
      assert.equal(obj2.test2, 'value2');
      assert.equal(obj2.test3, 'value3');
      assert.equal(obj1===obj2, false);
    });


    it('clone big object && test value:', function () {
      var obj1 = bigMap;
      var obj2 = clone(obj1);
      assert.equal(obj2.path.length, 8);
      assert.equal(obj1.path===obj2.path,false);
      assert.equal(obj1===obj2, false);
    });





  });


});
