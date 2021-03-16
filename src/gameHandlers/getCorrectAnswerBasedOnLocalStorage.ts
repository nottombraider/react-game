import { CountryFlags, CurrentVariants, SeenFlagsIdList } from "types";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "services/getDataFromLocalStorage";

export const getCorrectAnswerBasedOnLocalStorage = (
  countryFlags: CountryFlags
) => {
  const {
    correctId: correctVariantID,
  } = getDataFromLocalStorage<CurrentVariants>(StorageKeys.CurrentVariants, {
    correctId: null,
    answerVariantsId: [],
  });
  const seenFlags = getDataFromLocalStorage<SeenFlagsIdList>(
    StorageKeys.SeenFlags,
    []
  );

  if (!correctVariantID || seenFlags.includes(correctVariantID))
    return undefined;

  return countryFlags.find((flag) => flag.id === correctVariantID);
};
