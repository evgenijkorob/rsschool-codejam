const assert = require('assert');  
const sumOfOther = require('../sumOfOther.js');
const make = require('../make.js');
const recursion = require('../recursion.js');

describe('sumOfOther(array)', () => {
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
    const error = make();
    assert.deepEqual(error, { message: 'Callback is undefined' });
  });
  it('При вызове без аргументов возвращает ошибку', () => {
    const error = make(1)(2)();
    assert.deepEqual(error, { message: 'Callback is undefined' });
  });
});
