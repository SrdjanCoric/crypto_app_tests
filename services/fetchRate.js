import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const headers = {
  headers: { "X-CoinAPI-Key": process.env.API_KEY },
};

export const fetchRate = async (symbol = "BTC") => {
  try {
    const response = await axios.get(
      `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`,
      headers
    );
    return response;
  } catch (e) {
    throw e.response;
  }
};
