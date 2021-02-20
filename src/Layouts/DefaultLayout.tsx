import { Header } from "Components/Header";
import { Footer } from "Components/Footer";
import { PropsWithChildren } from "react";

export const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="flag-quiz-game-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
