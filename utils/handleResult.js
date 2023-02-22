import { isValidQuantity } from "./isValidQuantity.js";
import { getTotalPrice } from "./getTotalPrice.js";

export const handleResult = async (symbol, quantity) => {
  if (isValidQuantity(quantity)) {
    const p = await getTotalPrice(symbol, quantity);
    return p;
  } else {
    return "The input for the amount is incorrect";
  }
};
