import { Router } from "@reach/router";
import { MainGameScreen } from "./GameScreen/MainGameScreen";
import { StartScreen } from "./StartScreen/StartScreen";

export const Routes = () => {
  return (
    <Router>
      <StartScreen path="/" />
      <MainGameScreen path="/game" />
    </Router>
  );
};
