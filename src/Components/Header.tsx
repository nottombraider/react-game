import React from "react";
import AudioPlayControlButton from "Pages/StartScreen/AudioPlayControlButton";
import "../styles/utility-styles.css";
import "./style-Header.css";
import { navigate } from "@reach/router";
import { RoutPaths } from "Pages/routes";

const AUDIO_CONTROL_ICONS: string[] = ["music", "sounds"];

export const Header = () => {
  return (
    <header className="header flex align-center space-between">
      <div
        className="header__logo"
        onClick={() => navigate(RoutPaths.StartScreen)}
      >
        <span className="header__sub-text">one more</span>
        <h1 className="header__text-logo">Flag Quiz</h1>
      </div>

      <ul className="header__button-container flex ">
        {AUDIO_CONTROL_ICONS.map((buttonKey) => (
          <AudioPlayControlButton id={buttonKey} key={buttonKey} />
        ))}
      </ul>
    </header>
  );
};
