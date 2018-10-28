module.exports = function make(argument) {
  let argList = [];
  function f(arg) {
    if (arg === undefined) throw new Error('Callback is undefined');
    if (typeof arg === 'function') {
      if (!argList.length) {
        return arg();
      }
      return argList.reduce((a, b) => arg(a, b));
    }
    argList.push(arg);
    return f;
  }
  return f(argument);
};
