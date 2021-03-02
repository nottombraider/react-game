import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { useCountryFlags } from "./useCountryFlags";
import { Preloader } from "Components/Preloader";
import "./main-game-screen.css";
import { GameScreen } from "./GameScreen";

export const MainGameScreen: FunctionComponent<RouteComponentProps> = () => {
  const [countryFlags, isLoading] = useCountryFlags();

  if (isLoading) return <Preloader />;
  return <GameScreen countryFlags={countryFlags} />;
};
