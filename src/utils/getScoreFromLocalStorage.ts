export const getScoreFromLocalStorage = (scoreType: string) => {
  const scoreInStorage = localStorage.getItem(scoreType);
  return scoreInStorage ? JSON.parse(scoreInStorage) : 0;
};
