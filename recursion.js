let nodeList = [];

function recursion(level, node) {
  if (node === undefined) return nodeList;
  else if (!node.hasOwnProperty('value')) throw new Error('Bad tree');

  if (nodeList[level] === undefined) nodeList[level] = [];
  nodeList[level].push(node.value);

  recursion(level + 1, node.left);
  recursion(level + 1, node.right);

  return nodeList;
}

module.exports = recursion.bind(null, 0);
