import { FunctionComponent } from "react";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { getScoreFromLocalStorage } from "utils/getScoreFromLocalStorage";
import { RouteComponentProps } from "@reach/router";

export const ScoreScreen: FunctionComponent<RouteComponentProps> = () => {
  const userScores = getScoreFromLocalStorage("scores");

  return (
    <DefaultLayout>
      <div>
        <h1>Your scores:</h1>
      </div>
    </DefaultLayout>
  );
};
