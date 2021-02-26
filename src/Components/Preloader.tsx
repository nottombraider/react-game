import { DefaultLayout } from "Layouts/DefaultLayout";

import "./style-Preloader.css";
import "../styles/utility-styles.css";

export const Preloader = () => {
  return (
    <div className="loading-screen flex column align-center">
      <span className="loading-main-text">Waiting to start</span>
      <div className="loading-circle"> </div>
      <span className="loading-secondary-text">Loading...</span>
    </div>
  );
};
