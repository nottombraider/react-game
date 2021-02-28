import { FunctionComponent } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { getDataFromLocalStorage } from "../../utils/getDataFromLocalStorage";

export const GameOver: FunctionComponent<RouteComponentProps> = () => {
  const score = getDataFromLocalStorage("currentScore");

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

      <button onClick={() => navigate("/score")}>
        Check your 10 best last scores
      </button>

      <button onClick={() => navigate("/")}>New Game</button>
    </DefaultLayout>
  );
};
