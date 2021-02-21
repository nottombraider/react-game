import { useState, useEffect } from "react";

type CountryFlag = { country: string; flag: string };
type CountryFlags = Array<CountryFlag>;
type UseCountryFlagsReturnType = [
  countryFlags: CountryFlags,
  isLoading: boolean
];

export const useCountryFlags = (): UseCountryFlagsReturnType => {
  const [countryFlags, setCountries] = useState<CountryFlags>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/flag/images"
      );
      const countriesWithFlag = await response.json();

      setCountries(countriesWithFlag.data);
      setIsLoading(false);
    })();
  }, []);

  return [countryFlags, isLoading];
};
