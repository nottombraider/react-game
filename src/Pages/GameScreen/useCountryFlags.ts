import { useState, useEffect } from "react";
import { CountryFlag, CountryFlags, UseCountryFlagsReturnType } from "types";

export const useCountryFlags = (): UseCountryFlagsReturnType => {
  const [countryFlags, setCountries] = useState<CountryFlags>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/flag/images"
      );
      const responseJSON = (await response.json()) as {
        data: Array<Omit<CountryFlag, "id">>;
      };

      const countryFlagsWithId = responseJSON.data.map((item, index) => {
        return { id: index + 1, ...item };
      });
      setCountries(countryFlagsWithId);
      setIsLoading(false);
    })();
  }, []);

  return [countryFlags, isLoading];
};
