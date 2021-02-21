import { RouteComponentProps } from "@reach/router";
import { DefaultLayout } from "Layouts/DefaultLayout";
import { FunctionComponent } from "react";
import { getVariants } from "utils";
import { useCountryFlags } from "./useCountryFlags";

export const MainGameScreen: FunctionComponent<RouteComponentProps> = () => {
  const [countryFlags, isLoading] = useCountryFlags();
  const countryFlagsVariants = getVariants(countryFlags, 4);
  const [correctAnswer] = countryFlagsVariants;

  if (isLoading) return <h1>Loading game...</h1>;
  return (
    <DefaultLayout>
      <main>
        <figure>
          <img src={correctAnswer.flag} alt="flag" />
        </figure>
        <ul>
          {countryFlagsVariants.map((countryFlagVariant) => (
            <li key={countryFlagVariant.name}>
              <button>{countryFlagVariant.name}</button>
            </li>
          ))}
        </ul>
      </main>
    </DefaultLayout>
  );
};
