import { FunctionComponent, useEffect } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { CurrentScoreType } from "types";
import { resetGameState } from "gameHandlers/resetGame";
import "./style-GameOver.css";
import { setScoreToTableScore } from "gameHandlers";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "services/getDataFromLocalStorage";
import { RoutPaths } from "Pages/routes";

export const DEFAULT_CURRENT_SCORE: CurrentScoreType = {
  time: null,
  score: 0,
};

export const GameOver: FunctionComponent<RouteComponentProps> = () => {
  const score = getDataFromLocalStorage<CurrentScoreType>(
    StorageKeys.CurrentScore,
    DEFAULT_CURRENT_SCORE
  );

  useEffect(() => {
    setScoreToTableScore();
    resetGameState();
  }, []);

  return (
    <DefaultLayout>
      <main className="game-over-screen-container flex column align-center space-around">
        <div className="flex column align-center">
          <h1 className="animate__animated animate__pulse animate__infinite">
            Game Over!
          </h1>

          <div>
            <span>Your score: </span>
            <span>{score.score}</span>
          </div>
        </div>
        <div className="game-over-button-container flex column justify-center">
          <button
            className="button-x"
            onClick={() => navigate(RoutPaths.ScoreScreen)}
          >
            Score board
          </button>

          <button
            className="button-x"
            onClick={() => navigate(RoutPaths.StartScreen)}
          >
            New Game
          </button>
        </div>
      </main>
    </DefaultLayout>
  );
};
