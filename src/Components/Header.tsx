import React from "react";
import AudioPlayControlButton from "Pages/StartScreen/AudioPlayControlButton";
import "../styles/utility-styles.css";
import "./styles-Header.css";

const AUDIO_CONTROL_ICONS: string[] = ["music", "sounds"];

export const Header = () => {
  return (
    <header className="header flex align-center space-around ">
      <div className="header__logo">
        <span className="header__sub-text">one more</span>
        <h1 className="header__text-logo">
          Flag Quiz <span className="game-header-icon">&#127918;</span>
        </h1>
      </div>

      <ul className="header__button-container flex ">
        {AUDIO_CONTROL_ICONS.map((buttonKey) => (
          <AudioPlayControlButton id={buttonKey} key={buttonKey} />
        ))}
      </ul>
    </header>
  );
};
