import { Router } from "@reach/router";
import { StartScreen } from "./StartScreen/StartScreen";

export const Routes = () => {
  return (
    <Router>
      <StartScreen path="/" />
    </Router>
  );
};
