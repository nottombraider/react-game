import { FunctionComponent } from "react";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { RouteComponentProps } from "@reach/router";
import { ScoreListType } from "types";
import { getDataFromLocalStorage, StorageKeys } from "utils";

export const ScoreScreen: FunctionComponent<RouteComponentProps> = () => {
  const userScores = getDataFromLocalStorage<ScoreListType>(
    StorageKeys.Scores,
    []
  );

  return (
    <DefaultLayout>
      <div>
        <h1>Your scores:</h1>
        <ul>
          {userScores.map((score) => (
            <li>
              {score.time} {score.score}
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};
