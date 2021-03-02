import { FunctionComponent, useEffect } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import "./style-WinScreen.css";
import { DEFAULT_CURRENT_SCORE } from "./GameOver";
import { CurrentScoreType } from "types";
import { resetGameState } from "gameHandlers/resetGame";
import {
  getDataFromLocalStorage,
  setScoreToTableScore,
  StorageKeys,
} from "utils";

export const WinScreen: FunctionComponent<RouteComponentProps> = () => {
  const userScore = getDataFromLocalStorage<CurrentScoreType>(
    StorageKeys.CurrentScore,
    DEFAULT_CURRENT_SCORE
  );

  useEffect(() => {
    setScoreToTableScore();
    resetGameState();
  }, []);

  return (
    <DefaultLayout>
      <div className="flex column align-center">
        <div className="congratulation-header animate__animated animate__tada animate__infinite">
          <h1>YOU WON!</h1>
          <h2>Congratulation</h2>
        </div>
        <div className="score-info">
          <span>Your score: </span>
          <span>{userScore.score}</span>
        </div>

        <button onClick={() => navigate("/score")}>
          Check your 10 best last scores
        </button>

        <button onClick={() => navigate("/")}>New Game</button>
      </div>
    </DefaultLayout>
  );
};
