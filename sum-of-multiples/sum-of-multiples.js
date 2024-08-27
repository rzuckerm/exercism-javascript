export const sum = (mults, limit) => [...Array(limit)].reduce((acc, _, n) => acc + n * mults.some((m) => m && n % m == 0), 0);
