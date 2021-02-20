import React from "react";
import AudioPlayControlButton from "Pages/StartScreen/AudioPlayControlButton";
import "../styles/utility-styles.css";
import "./styles-Header.css";

const AUDIO_CONTROL_ICONS: string[] = ["music", "sounds"];

export const Header = () => {
  return (
    <header className="flex align-center space-around start-screen-header">
      <h1 className="start-screen-header__text-logo">
        <span className="start-screen-header__sub-text">one more</span>
        Flag Quiz <span className="game-header-icon">&#127918;</span>
      </h1>
      <ul className="flex start-screen-header__button-container">
        {AUDIO_CONTROL_ICONS.map((buttonKey) => (
          <AudioPlayControlButton id={buttonKey} key={buttonKey} />
        ))}
      </ul>
    </header>
  );
};
