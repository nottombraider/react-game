import { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { useCountryFlags } from "./useCountryFlags";
import "./main-game-screen.css";
import { GameStepper } from "./GameStepper";

export const MainGameScreen: FunctionComponent<RouteComponentProps> = () => {
  const [countryFlags, isLoading] = useCountryFlags();

  if (isLoading) return <h1>Loading game...</h1>;
  return (
    <DefaultLayout>
      <GameStepper countryFlags={countryFlags} />
    </DefaultLayout>
  );
};
