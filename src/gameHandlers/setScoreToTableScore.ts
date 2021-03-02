import { DEFAULT_CURRENT_SCORE } from "Pages/EndScreens/GameOver";
import { ScoreListType, CurrentScoreType } from "types";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "../services/getDataFromLocalStorage";

export const setScoreToTableScore = () => {
  const scoresInLocalStorage = getDataFromLocalStorage<ScoreListType>(
    StorageKeys.Scores,
    []
  );
  const userCurrentScore = getDataFromLocalStorage<CurrentScoreType>(
    StorageKeys.CurrentScore,
    DEFAULT_CURRENT_SCORE
  );

  if (scoresInLocalStorage.length < 10) {
    scoresInLocalStorage.push(userCurrentScore);

    scoresInLocalStorage.sort((itemA, itemB) => itemA.score - itemB.score);
    localStorage.setItem("scores", JSON.stringify(scoresInLocalStorage));
  }

  if (scoresInLocalStorage.length >= 10) {
    scoresInLocalStorage.sort((itemA, itemB) => itemA.score - itemB.score);
    scoresInLocalStorage.splice(0, 1, userCurrentScore);
    scoresInLocalStorage.sort((itemA, itemB) => itemA.score - itemB.score);
    localStorage.setItem("scores", JSON.stringify(scoresInLocalStorage));
  }
};
