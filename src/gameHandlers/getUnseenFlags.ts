import { CountryFlags, SeenFlagsIdList } from "types";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "services/getDataFromLocalStorage";

export const getUnseenFlags = (countryFlags: CountryFlags) => {
  const seenFlagsIDs = getDataFromLocalStorage<SeenFlagsIdList>(
    StorageKeys.SeenFlags,
    []
  );

  return countryFlags.filter(({ id }) => !seenFlagsIDs.includes(id));
};
