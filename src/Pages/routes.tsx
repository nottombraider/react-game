import { Router } from "@reach/router";
import { GameOver } from "./EndScreens/GameOver";
import { WinScreen } from "./EndScreens/WinScreen";
import { MainGameScreen } from "./GameScreen/MainGameScreen";
import { SettingsScreen } from "./Settings/SettingsScreen";
import { StartScreen } from "./StartScreen/StartScreen";

export enum RoutPaths {
  StartScreen = "/",
  GameScreen = "/game",
  GameOver = "/game-over",
  WinScreen = "/win-screen",
  SettingsScreen = "/settings",
}

export const Routes = () => {
  return (
    <Router>
      <StartScreen path={RoutPaths.StartScreen} />
      <MainGameScreen path={RoutPaths.GameScreen} />
      <GameOver path={RoutPaths.GameOver} />
      <WinScreen path={RoutPaths.WinScreen} />
      <SettingsScreen path={RoutPaths.SettingsScreen} />
    </Router>
  );
};
