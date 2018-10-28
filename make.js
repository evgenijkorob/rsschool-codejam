module.exports = function make(argument) {
  const error = { message: 'Callback is undefined' };
  let argList = [];
  function f(arg) {
    if (arg === undefined) {
      return error;
    }
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
}