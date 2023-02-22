import { isValidQuantity } from "./isValidQuantity";

describe("isValidQuantity", () => {
  it("returns true if the quantity is a valid positive number", () => {
    const quantity = "5";
    expect(isValidQuantity(quantity)).toBe(true);
  });
  it("returns true if the quantity is undefined", () => {
    const quantity = undefined;
    expect(isValidQuantity(quantity)).toBe(true);
  });
  it("returns false if the quantity is invalid", () => {
    const quantity = "aaaa";
    expect(isValidQuantity(quantity)).toBe(false);
  });
});
