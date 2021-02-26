import { useNavigate } from "@reach/router";
import { RoutPaths } from "Pages/routes";
import "./style-StartScreen.css";

export const StartScreenMainGameControls = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content-wrapper flex column align-center justify-center">
      <div className="flex column">
        <button
          onClick={() => navigate(RoutPaths.GameScreen)}
          className="main-game-button"
        >
          Start Game
        </button>
        <button className="main-game-button">Settings</button>
      </div>
    </main>
  );
};
