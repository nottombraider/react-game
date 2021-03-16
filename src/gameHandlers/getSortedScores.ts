import { CurrentScoreType } from "types";

export const getSortedScores = (
  itemA: CurrentScoreType,
  itemB: CurrentScoreType
) => itemA.score - itemB.score;
