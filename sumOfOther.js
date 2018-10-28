module.exports = function sumOfOther(array) {
  if (array === undefined || array === null || !array.length) {
    return undefined;
  }
  return array.map((element, index) => {
    let buf = array.filter((elem, i) => i !== index);
    return buf.reduce((sum, x) => sum + x);
  });
};
