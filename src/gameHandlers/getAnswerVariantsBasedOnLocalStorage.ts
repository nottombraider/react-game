import { CountryFlags, CurrentVariants } from "types";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "services/getDataFromLocalStorage";

export const getAnswerVariantsBasedOnLocalStorage = (
  countryFlags: CountryFlags
) => {
  const {
    answerVariantsId: answerVariantsIDs,
  } = getDataFromLocalStorage<CurrentVariants>(StorageKeys.CurrentVariants, {
    correctId: null,
    answerVariantsId: [],
  });

  return answerVariantsIDs.reduce((acc, id) => {
    const flag = countryFlags.find((flag) => flag.id === id);
    if (flag) {
      return [...acc, flag];
    }
    return acc;
  }, [] as CountryFlags);
};
