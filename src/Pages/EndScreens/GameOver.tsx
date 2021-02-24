import { RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { FunctionComponent } from "react";

export const GameOver: FunctionComponent<RouteComponentProps> = () => {
  return (
    <DefaultLayout>
      <h1>Game Over!</h1>
    </DefaultLayout>
  );
};
