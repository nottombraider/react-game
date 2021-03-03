import { useState, useEffect, MouseEvent } from "react";
import { navigate } from "@reach/router";
import { RoutPaths } from "Pages/routes";
import arrayShuffle from "array-shuffle";
import { CurrentScoreType, CurrentVariants, GameStepperProps } from "types";
import { DEFAULT_CURRENT_SCORE } from "Pages/EndScreens/GameOver";
import { getStepCounter, getUpdatedUserFlags } from "gameHandlers";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "services/getDataFromLocalStorage";

export const GameStepper = ({
  userFlags,
  setUserFlags,
  correctVariant,
  answerVariants,
  allCountryFlagsLength,
}: GameStepperProps) => {
  const [score, setScore] = useState<CurrentScoreType>(() => {
    return getDataFromLocalStorage<CurrentScoreType>(
      StorageKeys.CurrentScore,
      DEFAULT_CURRENT_SCORE
    );
  });
  const [stepCounter, setStepCounter] = useState(() => getStepCounter());

  const handleChosenAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    const chosenAnswer = event.target.innerText;

    if (chosenAnswer === correctVariant.name.toUpperCase()) {
      const updatedUserFlags = getUpdatedUserFlags(userFlags, correctVariant);

      setUserFlags(updatedUserFlags);
      setScore({ time: new Date().toString(), score: score.score + 10 });
      setStepCounter(stepCounter + 1);
    } else {
      navigate(RoutPaths.GameOver);
    }
  };

  useEffect(() => {
    if (userFlags.length === 0) {
      navigate(RoutPaths.WinScreen);
    }
  }, [userFlags.length]);

  useEffect(() => {
    const userCurrentScore: CurrentScoreType = {
      time: new Date().toString(),
      score: score.score,
    };

    localStorage.setItem(
      StorageKeys.CurrentScore,
      JSON.stringify(userCurrentScore)
    );
    localStorage.setItem(StorageKeys.StepCounter, JSON.stringify(stepCounter));
  }, [score, stepCounter]);

  useEffect(() => {
    const currentVariants: CurrentVariants = {
      correct: correctVariant.id,
      answerVariants: answerVariants.map((item) => item.id),
    };
    localStorage.setItem(
      StorageKeys.CurrentVariants,
      JSON.stringify(currentVariants)
    );
  }, [correctVariant.id, answerVariants]);

  const shuffledFlagsVariants = arrayShuffle(answerVariants);

  return (
    <main className="main-content-wrapper flex column align-center space-around">
      <div className="game-info flex space-between">
        <div>
          <span>Score: </span>
          <span>{score.score} points</span>
          <div className="step-counter">{`${stepCounter}/${allCountryFlagsLength}`}</div>
        </div>
        <button
          className="pause-button"
          onClick={() => navigate(RoutPaths.StartScreen)}
        >
          Pause
        </button>
      </div>
      <div className="main-flag-wrapper">
        <img
          src={correctVariant.flag}
          alt="flag"
          className="main-flag-img animate__animated animate__backInDown"
        />
      </div>

      <ul className="answer-wrapper flex wrap space-around">
        {shuffledFlagsVariants.map((countryFlagVariant) => (
          <li key={countryFlagVariant.name} className="answer-button-li">
            <button
              className="answer-button"
              onClick={handleChosenAnswer}
              aria-label={countryFlagVariant.name}
            >
              {countryFlagVariant.name}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};
