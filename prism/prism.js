// Use unit vector method recommended by Google AI
const DEG_TO_RAD = Math.PI / 180;
const TOL = 1e-6;

export const findSequence = (start, prisms) => {
  let current = { ...start, id: null };
  let ids = [];
  while (true) {
    const [unitX, unitY] = [Math.cos(current.angle * DEG_TO_RAD), Math.sin(current.angle * DEG_TO_RAD)];
    const selectedPrism = prisms.filter((p) => p.x != current.x || p.y != current.y).reduce(
      ([bestP, minDist], p) => {
        const [dx, dy] = [p.x - current.x, p.y - current.y];
        const dist = Math.hypot(dx, dy);
        return ((dist < minDist) && Math.abs((dx * unitX + dy * unitY) / dist - 1) <= TOL) ? [p, dist] : [bestP, minDist];
      }, [null, Infinity])[0];
    if (!selectedPrism) { break; }
    ids.push(selectedPrism.id);
    current = { ...selectedPrism, angle: (current.angle + selectedPrism.angle) % 360 };
  }

  return ids;
};
