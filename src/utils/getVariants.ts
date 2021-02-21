import { getRandomNumber } from "utils";

export const getVariants = <ItemType extends {}>(
  items: Array<ItemType>,
  amount: number
) => {
  const results: Array<ItemType> = [];

  while (amount--) {
    const randomItemIndex = getRandomNumber(0, items.length - 1);
    const result = items[randomItemIndex];
    results.push(result);
    items.splice(randomItemIndex, 1);
  }

  return results;
};
