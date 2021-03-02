import { CountryFlags, CurrentVariants } from "types";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "utils/getDataFromLocalStorage";

export const getAnswerVariantsBasedOnLocalStorage = (
  countryFlags: CountryFlags
) => {
  const {
    answerVariants: answerVariantsIDs,
  } = getDataFromLocalStorage<CurrentVariants>(StorageKeys.CurrentVariants, {
    correct: null,
    answerVariants: [],
  });

  return answerVariantsIDs.reduce((acc, id) => {
    const flag = countryFlags.find((flag) => flag.id === id);
    if (flag) {
      return [...acc, flag];
    }
    return acc;
  }, [] as CountryFlags);
};
