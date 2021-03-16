import { FunctionComponent } from "react";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { navigate, RouteComponentProps } from "@reach/router";
import { ScoreListType } from "types";
import {
  getDataFromLocalStorage,
  StorageKeys,
} from "services/getDataFromLocalStorage";
import { RoutPaths } from "Pages/routes";

export const ScoreScreen: FunctionComponent<RouteComponentProps> = () => {
  const userScores = getDataFromLocalStorage<ScoreListType>(
    StorageKeys.Scores,
    []
  );

  return (
    <DefaultLayout>
      <div className="flex column align-center">
        <h2>Your scores:</h2>
        <ul className="score-list-wrapper">
          {userScores.length ? (
            userScores.map(({ time, score }) => {
              const date = time ? new Date(time) : new Date();

              return (
                <li className="score-wrapper flex space-between">
                  <span>{date.toDateString()} </span>
                  <span>{score}</span>
                </li>
              );
            })
          ) : (
            <span>You have no scores yet</span>
          )}
        </ul>
        <div className="score-nav-button-wrapper flex space-around">
          <button
            className="score-buttons"
            onClick={() => navigate(RoutPaths.StartScreen)}
          >
            back
          </button>
          <button
            className="score-buttons"
            onClick={() => navigate(RoutPaths.GameScreen)}
          >
            start game
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};
