export const degreesOfSeparation = (familyTree, personA, personB) => {
  // Convert family tree into an undirected graph
  var relatives = {};
  Object.entries(familyTree).forEach(([parent, children]) => children.forEach((childA, i) => {
    // Connect parent and children
    connect(relatives, parent, childA);

    // Connect siblings
    children.slice(i + 1).forEach((childB) => connect(relatives, childA, childB));
  }));

  // If either person is not in the graph, indicate not related
  if (!relatives[personA] || !relatives[personB]) { return -1; }

  // Do breadth first search from person A to person B
  var queue = [[personA, 0]];
  var visited = new Set([personA]);
  while (queue.length > 0) {
    const [person, distance] = queue.shift();
    if (person == personB) { return distance; }

    for (const relative of relatives[person]) {
      if (!visited.has(relative)) {
        visited.add(relative);
        queue.push([relative, distance + 1]);
      }
    }
  }

  // Indicate not relative if not found
  return -1;
};

// Connect relatives to each other
const connect = (relatives, a, b) => {
  if (!relatives[a]) { relatives[a] = new Set(); }
  if (!relatives[b]) { relatives[b] = new Set(); }
  relatives[a].add(b);
  relatives[b].add(a);
}
