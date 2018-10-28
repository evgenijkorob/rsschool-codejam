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
