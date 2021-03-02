import { StorageKeys } from "services/getDataFromLocalStorage";

export const resetGameState = () => {
  localStorage.removeItem(StorageKeys.SeenFlags);
  localStorage.removeItem(StorageKeys.CurrentScore);
  localStorage.removeItem(StorageKeys.CurrentVariants);
};
