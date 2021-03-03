import { StorageKeys } from "services/getDataFromLocalStorage";

export const getStepCounter = () => {
  const stepCounter = localStorage.getItem(StorageKeys.StepCounter);
  return stepCounter ? Number(JSON.parse(stepCounter)) : 1;
};
