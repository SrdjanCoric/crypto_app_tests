import { fetchRate } from "./fetchRate";
import axios from "axios";

jest.mock("axios");

test("returns a correct response if the symbol is correct", async () => {
  const res = {
    data: {
      rate: 23500,
    },
  };
  // jest.spyOn(axios, "get").mockResolvedValueOnce(res);
  axios.get.mockResolvedValueOnce(res);
  // axios.get.mockImplementationOnce(() => Promise.resolve(res));
  // const response = await fetchRate();
  // expect(response).toEqual(res);
  expect(fetchRate()).resolves.toEqual(res);
});

test("returns an error response if we pass invalid symbol", async () => {
  const e = {
    response: {
      data: {
        error: "We didn't find your currency",
      },
      status: 500,
    },
  };
  axios.get.mockRejectedValueOnce(e);
  expect(fetchRate()).rejects.toEqual(e.response);
});

test("returns a status 500", async () => {
  const e = {
    response: {
      data: {
        error: "We didn't find your currency",
      },
      status: 500,
    },
  };
  axios.get.mockRejectedValueOnce(e);
  try {
    await fetchRate();
  } catch (e) {
    expect(e.status).toEqual(500);
  }
});
