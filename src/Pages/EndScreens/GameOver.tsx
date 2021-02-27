import { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { getScoreFromLocalStorage } from "../../utils/getScoreFromLocalStorage";

export const GameOver: FunctionComponent<RouteComponentProps> = () => {
  const score = getScoreFromLocalStorage();

  return (
    <DefaultLayout>
      <div className="flex column align-center">
        <h1 className="animate__animated animate__pulse animate__infinite">
          Game Over!
        </h1>

        <div>
          <span>Your score: </span>
          <span>{score.score}</span>
        </div>
      </div>
    </DefaultLayout>
  );
};
