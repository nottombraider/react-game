import { useNavigate } from "@reach/router";
import { RoutPaths } from "Pages/routes";

export const StartScreenMainGameControls = () => {
  const navigate = useNavigate();

  return (
    <main className="start-screen-main flex column align-center space-around">
      <button onClick={() => navigate(RoutPaths.GameScreen)}>Start Game</button>
      {/* <button>Settings</button> */}
    </main>
  );
};
