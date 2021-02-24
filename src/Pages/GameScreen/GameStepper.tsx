import { useState, MouseEvent } from "react";
import { navigate } from "@reach/router";
import { RoutPaths } from "Pages/routes";
import { getVariants } from "utils";
import { CountryFlags } from "./useCountryFlags";
import arrayShuffle from "array-shuffle";

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
    //@ts-ignore
    const chosenAnswer = event.target.innerText;
    if (chosenAnswer === correctAnswer.name) {
      const updatedUserFlags = [...userFlags];
      const correctAnswerIndex = updatedUserFlags.indexOf(correctAnswer);
      updatedUserFlags.splice(correctAnswerIndex, 1);
      setUserFlags(updatedUserFlags);
      setScore(score + 10);
    } else {
      navigate(RoutPaths.GameOver);
    }
  };

  return (
    <main>
      <div>
        <img src={correctAnswer.flag} alt="flag" className="main-flag-img" />
        <div>
          <span>Score: </span>
          <span>{score} points</span>
        </div>
      </div>
      <ul>
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
