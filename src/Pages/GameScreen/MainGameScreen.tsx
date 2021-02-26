import { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { useCountryFlags } from "./useCountryFlags";
import { GameStepper } from "./GameStepper";
import { Preloader } from "Components/Preloader";
import "./main-game-screen.css";

export const MainGameScreen: FunctionComponent<RouteComponentProps> = () => {
  const [countryFlags, isLoading] = useCountryFlags();

  if (isLoading) return <Preloader />;
  return (
    <DefaultLayout>
      <GameStepper countryFlags={countryFlags} />
    </DefaultLayout>
  );
};
