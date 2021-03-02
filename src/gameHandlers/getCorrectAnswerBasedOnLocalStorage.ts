import { CountryFlags, CurrentVariants, SeenFlagsIdList } from "types";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "utils/getDataFromLocalStorage";

export const getCorrectAnswerBasedOnLocalStorage = (
  countryFlags: CountryFlags
) => {
  const {
    correct: correctVariantID,
  } = getDataFromLocalStorage<CurrentVariants>(StorageKeys.CurrentVariants, {
    correct: null,
    answerVariants: [],
  });
  const seenFlags = getDataFromLocalStorage<SeenFlagsIdList>(
    StorageKeys.SeenFlags,
    []
  );

  if (!correctVariantID || seenFlags.includes(correctVariantID))
    return undefined;

  return countryFlags.find((flag) => flag.id === correctVariantID);
};
