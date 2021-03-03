import { navigate } from "@reach/router";
import { RoutPaths } from "Pages/routes";

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
    </header>
  );
};
