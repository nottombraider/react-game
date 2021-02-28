export const getDataFromLocalStorage = (dataType: string) => {
  const scoreInStorage = localStorage.getItem(dataType);
  return scoreInStorage ? JSON.parse(scoreInStorage) : 0;
};
