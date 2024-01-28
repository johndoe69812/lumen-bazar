export const getFormattedPriceValue = (val: number) => {
  return new Intl.NumberFormat("ru-RU").format(val);
};
