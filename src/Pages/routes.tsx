import { Router } from "@reach/router";
import { GameOver } from "./EndScreens/GameOver";
import { MainGameScreen } from "./GameScreen/MainGameScreen";
import { SettingsScreen } from "./Settings/SettingsScreen";
import { StartScreen } from "./StartScreen/StartScreen";

export enum RoutPaths {
  StartScreen = "/",
  GameScreen = "/game",
  GameOver = "/game-over",
  SettingsScreen = "/settings",
}

export const Routes = () => {
  return (
    <Router>
      <StartScreen path={RoutPaths.StartScreen} />
      <MainGameScreen path={RoutPaths.GameScreen} />
      <GameOver path={RoutPaths.GameOver} />
      <SettingsScreen path={RoutPaths.SettingsScreen} />
    </Router>
  );
};
