import { useState, MouseEvent, useEffect } from "react";
import { navigate } from "@reach/router";
import { RoutPaths } from "Pages/routes";
import { getVariants } from "utils";
import { CountryFlags } from "./useCountryFlags";
import arrayShuffle from "array-shuffle";
import { getScoreFromLocalStorage } from "utils/getScoreFromLocalStorage";

type GameStepperProps = {
  countryFlags: CountryFlags;
};

export const GameStepper = ({ countryFlags }: GameStepperProps) => {
  const [score, setScore] = useState<number>(0);
  const [userFlags, setUserFlags] = useState(countryFlags);

  const countryFlagsVariants = getVariants(userFlags, countryFlags, 3);
  const [correctAnswer] = countryFlagsVariants;
  const shuffledFlagsVariants = arrayShuffle(countryFlagsVariants);

  const handleChosenAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    const chosenAnswer = event.target.innerText;
    if (chosenAnswer === correctAnswer.name) {
      const updatedUserFlags = [...userFlags];
      const correctAnswerIndex = updatedUserFlags.indexOf(correctAnswer);
      updatedUserFlags.splice(correctAnswerIndex, 1);
      setUserFlags(updatedUserFlags);
      setScore(score + 10);
    } else {
      const scoresInLocalStorageJSON = localStorage.getItem("scores");
      const scoresInLocalStorage = scoresInLocalStorageJSON
        ? JSON.parse(scoresInLocalStorageJSON)
        : [];
      const userCurrentScore = getScoreFromLocalStorage("currentScore");

      if (scoresInLocalStorage.length < 10) {
        scoresInLocalStorage.push(userCurrentScore);
        //@ts-ignore
        scoresInLocalStorage.sort((itemA, itemB) => itemA.score - itemB.score);
        localStorage.setItem("scores", JSON.stringify(scoresInLocalStorage));
      }

      if (scoresInLocalStorage.length >= 10) {
        //@ts-ignore
        scoresInLocalStorage.sort((itemA, itemB) => itemA.score - itemB.score);
        scoresInLocalStorage.splice(0, 1, userCurrentScore);
        //@ts-ignore
        scoresInLocalStorage.sort((itemA, itemB) => itemA.score - itemB.score);
        localStorage.setItem("scores", JSON.stringify(scoresInLocalStorage));
      }
      navigate(RoutPaths.GameOver);
    }
  };

  useEffect(() => {
    const userCurrentScore = {
      time: new Date(),
      score: score,
    };

    localStorage.setItem("currentScore", JSON.stringify(userCurrentScore));
  }, [score]);

  useEffect(() => {
    if (userFlags.length === 0) {
      navigate(RoutPaths.WinScreen);
    }
  }, [userFlags.length]);

  return (
    <main className="main-content-wrapper flex column align-center space-around">
      <div>
        {/*TODO - add border to flags*/}
        <img
          src={correctAnswer.flag}
          alt="flag"
          className="main-flag-img animate__animated animate__backInDown"
        />
        <div>
          <span>Score: </span>
          <span>{score} points</span>
        </div>
      </div>

      <ul className="answer-wrapper flex">
        {shuffledFlagsVariants.map((countryFlagVariant) => (
          <li key={countryFlagVariant.name}>
            <button
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
