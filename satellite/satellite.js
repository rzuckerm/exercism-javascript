/**
 * @param {any[]} preorder
 * @param {any[]} inorder
 * @returns {object}
 * @throws {Error}
 */
export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length != inorder.length) { throw new Error('traversals must have the same length'); }
  if (!preorder.every((x) => inorder.includes(x))) { throw new Error('traversals must have the same elements'); }
  if (new Set(preorder).size != preorder.length) { throw new Error('traversals must contain unique items'); }
  return buildTree(preorder, inorder);
};

/**
 * @param {any[]} p
 * @param {any[]} i 
 */
const buildTree = (p, i) => {
  if (!p.length) { return {}; }

  // First preorder node is root node
  // Find root node in inorder
  let v = p[0], r = i.indexOf(v);

  // Store value of root node and recursively build left and right nodes of tree
  return {value: v, left: buildTree(p.slice(1, r + 1), i.slice(0, r)), right: buildTree(p.slice(r + 1), i.slice(r + 1))};
}
