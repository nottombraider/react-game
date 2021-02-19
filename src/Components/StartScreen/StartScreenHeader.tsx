import "../../styles/utility-styles.css";
import "./StartScreenStyles.css";

export const StartScreenHeader = () => {
  return (
    <header className="flex align-center space-around start-screen-header">
      <h1 className="start-screen-header__text-logo">
        <span className="start-screen-header__sub-text">one more</span>
        Flag Quiz <span className="game-header-icon">&#127918;</span>
      </h1>
      <div>
        <button className="music-header-icon" aria-label="Music button">
          <span>&#128264;</span>
        </button>
        <button className="sounds-header-icon" aria-label="Sounds button">
          <span>&#127926;</span>
        </button>
      </div>
    </header>
  );
};
