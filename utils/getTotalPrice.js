import { fetchRate } from "../services/fetchRate.js";

export const getTotalPrice = async (symbol = "BTC", quantity = 1) => {
  try {
    const response = await fetchRate(symbol);
    return `The total amount is ${
      Math.round(response.data.rate * quantity * 100) / 100
    }`;
  } catch (err) {
    return err.data.error;
  }
};
