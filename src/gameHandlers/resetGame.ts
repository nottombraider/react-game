import { StorageKeys } from "utils/getDataFromLocalStorage";

export const resetGameState = () => {
  localStorage.removeItem(StorageKeys.SeenFlags);
  localStorage.removeItem(StorageKeys.CurrentScore);
  localStorage.removeItem(StorageKeys.CurrentVariants);
};
