export type CountryFlag = { name: string; flag: string; id: number };
export type CountryFlags = Array<CountryFlag>;
export type UseCountryFlagsReturnType = [
  countryFlags: CountryFlags,
  isLoading: boolean
];
export type GameStepperProps = {
  userFlags: CountryFlags;
  setUserFlags: Function;
  correctVariant: CountryFlag;
  answerVariants: CountryFlags;
  allCountryFlagsLength: number;
};

export type CurrentScoreType = {
  time: Date | string | null;
  score: number;
};
export type ScoreListType = Array<CurrentScoreType>;
export type CurrentVariants = {
  correct: CountryFlag["id"] | null;
  answerVariants: Array<CountryFlag["id"]>;
};
export type SeenFlagsIdList = Array<CountryFlag["id"]>;
