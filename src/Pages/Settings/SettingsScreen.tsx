import { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";

export const SettingsScreen: FunctionComponent<RouteComponentProps> = () => {
  return (
    <DefaultLayout>
      <h1>Settings</h1>
      <div></div>
    </DefaultLayout>
  );
};
