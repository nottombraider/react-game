import React, { useState } from "react";
import {
  getUnseenFlags,
  getCorrectAnswerBasedOnLocalStorage,
  getAnswerVariantsBasedOnLocalStorage,
} from "gameHandlers";
import { getVariants } from "utils";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { CountryFlags } from "types";
import { GameStepper } from "./GameStepper";

type GameScreenProps = {
  countryFlags: CountryFlags;
};

export const GameScreen = ({ countryFlags }: GameScreenProps) => {
  const [userFlags, setUserFlags] = useState(() =>
    getUnseenFlags(countryFlags)
  );
  let correctVariant = getCorrectAnswerBasedOnLocalStorage(countryFlags);
  let answerVariants = getAnswerVariantsBasedOnLocalStorage(countryFlags);

  if (!correctVariant) {
    answerVariants = getVariants(userFlags, countryFlags, 3);
    [correctVariant] = answerVariants;
  }

  return (
    <DefaultLayout>
      <GameStepper
        correctVariant={correctVariant}
        answerVariants={answerVariants}
        userFlags={userFlags}
        setUserFlags={setUserFlags}
        allCountryFlagsLength={countryFlags.length}
      />
    </DefaultLayout>
  );
};
