import React, { useState, useEffect } from "react";
import { StartScreenHeader } from "./Components/StartScreen/StartScreenHeader";
import "./styles/utility-styles.css";
import StartScreen from "./Components/StartScreen/StartSreen";

const FlagQuizGame = () => {
  return (
    <div className="flag-quiz-game-wrapper">
      <StartScreen />
    </div>
  );
};

export default FlagQuizGame;
