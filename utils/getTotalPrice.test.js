import { fetchRate } from "../services/fetchRate";
// import * as fetchAPI from "../services/fetchRate";
import { getTotalPrice } from "./getTotalPrice";

jest.mock("../services/fetchRate.js");

test("it returns a string with correct amount", async () => {
  const res = {
    data: {
      rate: 23500,
    },
  };
  // jest.spyOn(fetchAPI, "fetchRate").mockResolvedValueOnce(res);
  fetchRate.mockResolvedValueOnce(res);
  expect(getTotalPrice("BTC", 2)).resolves.toEqual("The total amount is 47000");
});

test("it returns an error message if currrency doesn't exist", async () => {
  const e = {
    data: {
      error: "We didn't find your currency",
    },
    status: 500,
  };
  fetchRate.mockRejectedValueOnce(e);
  expect(getTotalPrice("Balh", 2)).resolves.toEqual(
    "We didn't find your currency"
  );
});
