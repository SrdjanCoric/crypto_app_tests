import { isValidQuantity } from "./isValidQuantity";
import { getTotalPrice } from "./getTotalPrice";
import { handleResult } from "./handleResult";

jest.mock("./isValidQuantity.js");
jest.mock("./getTotalPrice.js");

test("returns the total amount with quantity if quantity and symbol are valid", async () => {
  isValidQuantity.mockReturnValue(true);
  getTotalPrice.mockResolvedValue("The total amount is 23500");
  expect(handleResult()).resolves.toEqual("The total amount is 23500");
});

test("returns the total amount with quantity if quantity is valid but symbol is invalid", async () => {
  isValidQuantity.mockReturnValue(true);
  getTotalPrice.mockResolvedValue("We didn't find your currency");
  expect(handleResult()).resolves.toEqual("We didn't find your currency");
});

test("it returns an error message if quantity is invalid", async () => {
  isValidQuantity.mockReturnValue(false);
  expect(handleResult()).resolves.toEqual(
    "The input for the amount is incorrect"
  );
});
