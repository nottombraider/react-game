import { CountryFlags, CountryFlag } from "types";

export const getUpdatedUserFlags = (
  userFlags: CountryFlags,
  correctVariant: CountryFlag
): CountryFlags => {
  const updatedUserFlags = [...userFlags];
  const correctAnswerIndex = updatedUserFlags.indexOf(correctVariant);

  const seenFlagsJSON = localStorage.getItem("seenFlags");
  const seenFlags: Array<number> = seenFlagsJSON
    ? JSON.parse(seenFlagsJSON)
    : [];

  seenFlags.push(correctVariant.id);

  updatedUserFlags.splice(correctAnswerIndex, 1);

  localStorage.setItem("seenFlags", JSON.stringify(seenFlags));

  return updatedUserFlags;
};
