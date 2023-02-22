export const isValidQuantity = (quantity) => {
  return quantity === undefined || (!isNaN(quantity) && +quantity > 0);
};
