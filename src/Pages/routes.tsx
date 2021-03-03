import { Router } from "@reach/router";
import { GameOver } from "./EndScreens/GameOver";
import { ScoreScreen } from "./EndScreens/ScoreScreen";
import { WinScreen } from "./EndScreens/WinScreen";
import { MainGameScreen } from "./GameScreen/MainGameScreen";
import { StartScreen } from "./StartScreen/StartScreen";

export enum RoutPaths {
  StartScreen = "/",
  GameScreen = "/game",
  GameOver = "/game-over",
  WinScreen = "/win-screen",
  ScoreScreen = "/score",
}

export const Routes = () => {
  return (
    <Router>
      <StartScreen path={RoutPaths.StartScreen} />
      <MainGameScreen path={RoutPaths.GameScreen} />
      <GameOver path={RoutPaths.GameOver} />
      <WinScreen path={RoutPaths.WinScreen} />
      <ScoreScreen path={RoutPaths.ScoreScreen} />
    </Router>
  );
};
