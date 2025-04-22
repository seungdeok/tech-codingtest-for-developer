/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node, nodes = new Map()) {
    if (!node) return null;

  if (nodes.has(node)) return nodes.get(node);

  const clonedNode = new Node(node.val);

  nodes.set(node, clonedNode);

  for (const neighbor of node.neighbors) {
    const clonedNeighbor = cloneGraph(neighbor, nodes);
    clonedNode.neighbors.push(clonedNeighbor);
  }

  return clonedNode;
};