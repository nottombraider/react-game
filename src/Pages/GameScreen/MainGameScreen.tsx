import { RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { FunctionComponent } from "react";

export const MainGameScreen: FunctionComponent<RouteComponentProps> = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>GAME SCREEN</h1>
      </div>
    </DefaultLayout>
  );
};
