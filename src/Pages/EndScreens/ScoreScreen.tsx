import { FunctionComponent } from "react";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { getDataFromLocalStorage } from "utils/getDataFromLocalStorage";
import { RouteComponentProps } from "@reach/router";

export const ScoreScreen: FunctionComponent<RouteComponentProps> = () => {
  const userScores = getDataFromLocalStorage("scores");

  return (
    <DefaultLayout>
      <div>
        <h1>Your scores:</h1>
        <ul>
          {
            //@ts-ignore
            userScores.map((score) => (
              <li>
                {score.time} {score.score}
              </li>
            ))
          }
        </ul>
      </div>
    </DefaultLayout>
  );
};
