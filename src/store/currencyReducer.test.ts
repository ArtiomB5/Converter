import * as currencyReducer from "./currencyReducer";
import { axiosResponseDataType } from "../api/index";

let initialState: currencyReducer.stateType = {
  mainСurrencyData: {} as axiosResponseDataType,
  fromСurrencyData: {} as axiosResponseDataType
};

beforeEach(() => {});

test("should create action", () => {
  let payload = {
    result: "success",
    provider: "https://www.exchangerate-api.com",
    documentation: "https://www.exchangerate-api.com/docs/free",
    terms_of_use: "https://www.exchangerate-api.com/terms",
    time_last_update_unix: 1585872397,
    time_last_update_utc: "Fri, 02 Apr 2020 00:06:37 +0000",
    time_next_update_unix: 1585959987,
    time_next_update_utc: "Sat, 03 Apr 2020 00:26:27 +0000",
    time_eol_unix: 0,
    base_code: "USD",
    rates: {
      USD: 1,
      AED: 3.67,
      ARS: 64.51,
      AUD: 1.65,
      CAD: 1.42,
      CHF: 0.97,
      CLP: 864.53,
      CNY: 7.1,
      EUR: 0.919,
      GBP: 0.806,
      HKD: 7.75
    }
  };
  expect(
    currencyReducer.SetMainСurrency(payload as axiosResponseDataType)
  ).toEqual({
    type: "SET_MAIN_СURRENCY",
    payload: payload
  });

  expect(
    currencyReducer.SetFromСurrency(payload as axiosResponseDataType)
  ).toEqual({
    type: "SET_FROM_СURRENCY",
    payload: payload
  });
});

test("should return MainСurrency new state", () => {
  let payload = {
    result: "success",
    provider: "https://www.exchangerate-api.com",
    documentation: "https://www.exchangerate-api.com/docs/free",
    terms_of_use: "https://www.exchangerate-api.com/terms",
    time_last_update_unix: 1585872397,
    time_last_update_utc: "Fri, 02 Apr 2020 00:06:37 +0000",
    time_next_update_unix: 1585959987,
    time_next_update_utc: "Sat, 03 Apr 2020 00:26:27 +0000",
    time_eol_unix: 0,
    base_code: "USD",
    rates: {
      USD: 1,
      AED: 3.67,
      ARS: 64.51,
      AUD: 1.65,
      CAD: 1.42,
      CHF: 0.97,
      CLP: 864.53,
      CNY: 7.1,
      EUR: 0.919,
      GBP: 0.806,
      HKD: 7.75
    }
  };
  let action = currencyReducer.SetMainСurrency(
    payload as axiosResponseDataType
  );
  expect(currencyReducer.currencyReducer(initialState, action)).toEqual({
    ...initialState,
    mainСurrencyData: payload
  });
});

test("should return FromСurrency new state", () => {
  let payload = {
    result: "success",
    provider: "https://www.exchangerate-api.com",
    documentation: "https://www.exchangerate-api.com/docs/free",
    terms_of_use: "https://www.exchangerate-api.com/terms",
    time_last_update_unix: 1585872397,
    time_last_update_utc: "Fri, 02 Apr 2020 00:06:37 +0000",
    time_next_update_unix: 1585959987,
    time_next_update_utc: "Sat, 03 Apr 2020 00:26:27 +0000",
    time_eol_unix: 0,
    base_code: "USD",
    rates: {
      USD: 1,
      AED: 3.67,
      ARS: 64.51,
      AUD: 1.65,
      CAD: 1.42,
      CHF: 0.97,
      CLP: 864.53,
      CNY: 7.1,
      EUR: 0.919,
      GBP: 0.806,
      HKD: 7.75
    }
  };
  let action = currencyReducer.SetFromСurrency(
    payload as axiosResponseDataType
  );
  expect(currencyReducer.currencyReducer(initialState, action)).toEqual({
    ...initialState,
    fromСurrencyData: payload
  });
});
