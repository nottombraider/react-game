import { Router } from "@reach/router";
import { GameOver } from "./EndScreens/GameOver";
import { MainGameScreen } from "./GameScreen/MainGameScreen";
import { StartScreen } from "./StartScreen/StartScreen";

export enum RoutPaths {
  StartScreen = "/",
  GameScreen = "/game",
  GameOver = "/game-over",
}

export const Routes = () => {
  return (
    <Router>
      <StartScreen path={RoutPaths.StartScreen} />
      <MainGameScreen path={RoutPaths.GameScreen} />
      <GameOver path={RoutPaths.GameOver} />
    </Router>
  );
};
