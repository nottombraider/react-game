import { PropsWithChildren } from "react";

export const DefaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="flag-quiz-game-wrapper">
      {children}
      Footer
    </div>
  );
};
