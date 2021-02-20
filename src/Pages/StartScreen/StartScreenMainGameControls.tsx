import { useNavigate } from "@reach/router";

export const StartScreenMainGameControls = () => {
  const navigate = useNavigate();

  return (
    <main className="start-screen-main flex column align-center space-around">
      <button onClick={() => navigate("/game")}>Start Game</button>
      {/* <button>Settings</button> */}
    </main>
  );
};
