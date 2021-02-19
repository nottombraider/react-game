import "../../styles/utility-styles.css";

export const StartScreenHeader = () => {
  return (
    <header className="flex align-center space-around">
      <h1>Flag Quiz</h1>
      <div>
        <button>Music</button>
        <button>Sounds</button>
      </div>
    </header>
  );
};
