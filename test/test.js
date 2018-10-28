const assert = require('assert');
const sumOfOther = require('../sumOfOther.js');
const make = require('../make.js');
const recursion = require('../recursion.js');

describe('sumOfOther function', () => {
  const arr = [2, 3, 4, 1];
  it('Считает сумму всех соседних элементов для i-го', () => {
    assert.deepEqual(sumOfOther(arr), [8, 7, 6, 9]);
  });
  it('Если массив пуст, null или undefined, возвращает undefined', () => {
    assert.deepEqual(sumOfOther([]), undefined);
    assert.deepEqual(sumOfOther(null), undefined);
    assert.deepEqual(sumOfOther(undefined), undefined);
  });
});

describe('make function', () => {
  function sum(a, b) {
    return a + b;
  }
  function retStr() {
    return 'result';
  }
  it('Возвращает верный результат вызова callback', () => {
    assert.deepEqual(make(1)(2)(4)(sum), 7);
  });
  it('Работает при не переданных аргументах для callback', () => {
    assert.deepEqual(make(retStr), 'result');
  });
  it('При вызове без аргументов возвращает ошибку', () => {
    assert.throws(() => make(), Error, 'Callback is undefined');
  });
  it('При вызове без аргументов возвращает ошибку', () => {
    assert.throws(() => make(1)(2)(), Error, 'Callback is undefined');
  });
});

describe('recursion function', () => {
  const tree = {
    value: 100,
    left: {
      value: 90,
      left: {
        value: 70,
      },
      right: {
        value: 99,
      },
    },
    right: {
      value: 120,
      left: {
        value: 110,
      },
      right: {
        value: 130,
      },
    }
  };
  const result = [[100], [90, 120], [70, 99, 110, 130]];
  it('Возвращает правильный массив значений узлов', () => {
    assert.deepEqual(recursion(tree), result);
  });
});
