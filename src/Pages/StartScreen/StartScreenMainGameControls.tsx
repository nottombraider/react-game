import { useNavigate } from "@reach/router";
import { resetGameState } from "gameHandlers/resetGame";
import { RoutPaths } from "Pages/routes";
import { StorageKeys } from "services/getDataFromLocalStorage";

export const StartScreenMainGameControls = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content-wrapper flex column align-center justify-center">
      <div className="flex column">
        {localStorage.getItem(StorageKeys.CurrentVariants) ? (
          <button
            onClick={() => {
              navigate(RoutPaths.GameScreen);
            }}
            className="main-game-button"
          >
            Continue Game
          </button>
        ) : null}
        <button
          onClick={() => {
            resetGameState();
            navigate(RoutPaths.GameScreen);
          }}
          className="main-game-button"
        >
          Start New Game
        </button>
        <button
          onClick={() => navigate(RoutPaths.ScoreScreen)}
          className="main-game-button"
        >
          scores
        </button>
      </div>
    </main>
  );
};
