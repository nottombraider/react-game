import { getRandomNumber } from "utils";

const getPlayVariant = <ItemType extends {}>(items: Array<ItemType>) => {
  const randomIndex = getRandomNumber(0, items.length);
  return items[randomIndex];
};

const getOtherVariants = <ItemType extends {}>(
  items: Array<ItemType>,
  amount: number
) => {
  const allItems = [...items];
  const otherVariants = [];

  while (amount--) {
    const randomIndex = getRandomNumber(0, allItems.length);
    const result = allItems[randomIndex];
    otherVariants.push(result);
    allItems.splice(randomIndex, 1);
  }

  return otherVariants;
};

export const getVariants = <ItemType extends { name: string }>(
  userItems: Array<ItemType>,
  allItems: Array<ItemType>,
  otherVariantsAmount: number
) => {
  const userPlayVariant = getPlayVariant(userItems);
  const itemsWithoutPlayVariant = allItems.filter(
    (item) => item.name !== userPlayVariant.name
  );
  const otherVariants = getOtherVariants(
    itemsWithoutPlayVariant,
    otherVariantsAmount
  );

  return [userPlayVariant, ...otherVariants];
};
