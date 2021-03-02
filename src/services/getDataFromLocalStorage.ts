export enum StorageKeys {
  Scores = "scores",
  CurrentScore = "currentScore",
  CurrentVariants = "currentVariants",
  SeenFlags = "seenFlags",
}

export const localStorageHasKey = (key: StorageKeys) =>
  Boolean(localStorage.getItem(key));

export const getDataFromLocalStorage = <DataType>(
  key: StorageKeys,
  fallBackValue: DataType
): DataType => {
  const scoreInStorage = localStorage.getItem(key);
  return scoreInStorage ? JSON.parse(scoreInStorage) : fallBackValue;
};
