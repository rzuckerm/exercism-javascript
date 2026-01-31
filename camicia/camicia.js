export const simulateGame = (playerA, playerB) => {
  let debts = [playerA, playerB].map((h) => h.map((c) => 'JQKA'.indexOf(c) + 1));
  let [priorStates, pile, currentPlayer, debt, cardsPlayed, tricks, status] = [new Set(), [], 0, 0, 0, 0, 'loop'];
  while (status != 'finished') {
    let currentState = debts.join('|');
    if (priorStates.has(currentState)) { break; }
    if (debts.some((debt) => debt.some((d) => d))) { priorStates.add(currentState); }
    while (status != 'finished') {
      let origDebt = debt;
      let currentDebt = debts[currentPlayer];
      if (!currentDebt.length) { break; }
      let newDebt = currentDebt.shift(0);
      pile.push(newDebt);
      cardsPlayed++;
      debt = newDebt || Math.max(debt - 1, 0);
      if (debt == 0 && origDebt > 0) { break; }
      if (newDebt > 0 || debt == 0) { currentPlayer = 1 - currentPlayer; }
    }

    currentPlayer = 1 - currentPlayer;
    debts[currentPlayer].push(...pile.splice(0, pile.length));
    tricks++;
    if (!pile.length && (!debts[0].length || !debts[1].length)) { status = 'finished'; }
  }

  return { status: status, cards: cardsPlayed, tricks: tricks };
};
