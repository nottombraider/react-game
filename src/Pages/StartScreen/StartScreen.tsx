import { StartScreenHeader } from "./StartScreenHeader";
import { StartScreenMainGameControls } from "./StartScreenMainGameControls";
import { RouteComponentProps } from "@reach/router";
import { FunctionComponent } from "react";
import { DefaultLayout } from "Layouts/DefaultLayout";

export const StartScreen: FunctionComponent<RouteComponentProps> = () => {
  return (
    <DefaultLayout>
      <StartScreenHeader />
      <StartScreenMainGameControls />
    </DefaultLayout>
  );
};
