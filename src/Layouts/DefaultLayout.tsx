import { Header } from "Components/Header";
import { Footer } from "Components/Footer";
import { PropsWithChildren } from "react";
import "../styles/utility-styles.css";

export const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="flag-quiz-game-wrapper flex column space-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
