import { getRandomNumber } from "utils";

export const getVariants = <ItemType extends {}>(
  items: Array<ItemType>,
  amount: number
) => {
  const possibleAnswers = [...items];
  const results: Array<ItemType> = [];

  while (amount--) {
    const randomItemIndex = getRandomNumber(0, possibleAnswers.length - 1);
    const result = possibleAnswers[randomItemIndex];
    results.push(result);
    items.splice(randomItemIndex, 1);
  }

  return results;
};
