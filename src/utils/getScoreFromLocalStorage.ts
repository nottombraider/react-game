export const getScoreFromLocalStorage = () => {
  const scoreInStorage = localStorage.getItem("score");
  return scoreInStorage ? JSON.parse(scoreInStorage) : 0;
};
