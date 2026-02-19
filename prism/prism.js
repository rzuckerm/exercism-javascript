// Use unit vector method recommended by Google AI
const DEG_TO_RAD = Math.PI / 180;
const TOL = 1e-6;

export const findSequence = (start, prisms) => {
  let current = {...start, id: null};
  let ids = [];
  while (true) {
    const [unitX, unitY] = [Math.cos(current.angle * DEG_TO_RAD), Math.sin(current.angle * DEG_TO_RAD)];
    let selectedPrism = null;
    let minDist = Infinity;
    for (const prism of prisms) {
      const [dx, dy] = [prism.x - current.x, prism.y - current.y];
      let dist = Math.sqrt(dx * dx + dy * dy);
      let dot = dx * unitX + dy * unitY;
      if (dist > 0.0 && dist < minDist && dot >= dist * (1 - TOL) && dot <= dist * (1 + TOL)) {
        [selectedPrism, minDist] = [prism, dist];
      }
    }

    if (!selectedPrism) { break; }
    ids.push(selectedPrism.id);
    current = {...selectedPrism, angle: (current.angle + selectedPrism.angle) % 360};
  }

  return ids;
};
