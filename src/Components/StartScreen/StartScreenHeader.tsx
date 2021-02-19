import "../../styles/utility-styles.css";
import "./StartScreenStyles.css";
import AudioPlayControlButton from "./AudioPlayControlButton";

const AUDIO_CONTROL_ICONS: string[] = ["music", "sounds"];

export const StartScreenHeader = () => {
  return (
    <header className="flex align-center space-around start-screen-header">
      <h1 className="start-screen-header__text-logo">
        <span className="start-screen-header__sub-text">one more</span>
        Flag Quiz <span className="game-header-icon">&#127918;</span>
      </h1>
      <div>
        {AUDIO_CONTROL_ICONS.map((buttonId) => (
          <AudioPlayControlButton id={buttonId} />
        ))}
      </div>
    </header>
  );
};
