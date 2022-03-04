import { CURRENCY_CODES, currencyCodesType } from "../currencyCodes";

export type stateType = {
  currencyCodes: currencyCodesType[];
  mainСurrencyCode: currencyCodesType;
  fromСurrencyCode: currencyCodesType;
  toСurrencyCode: currencyCodesType;
};

let initialState: stateType = {
  currencyCodes: CURRENCY_CODES,
  mainСurrencyCode: {
    currencyCode: "USD",
    currencyName: "United States Dollar",
    country: "United States"
  },
  fromСurrencyCode: {
    currencyCode: "USD",
    currencyName: "United States Dollar",
    country: "United States"
  },
  toСurrencyCode: {
    currencyCode: "EUR",
    currencyName: "Euro",
    country: "European Union"
  }
};

export const codesReducer = (
  state: stateType = initialState,
  action: actionType
): stateType => {
  switch (action.type) {
    case "SET_MAIN_CODE":
      return {
        ...state,
        mainСurrencyCode: action.payload as currencyCodesType
      };
    case "SET_FROM_CODE":
      return {
        ...state,
        fromСurrencyCode: action.payload as currencyCodesType
      };
    case "SET_TO_CODE":
      return {
        ...state,
        toСurrencyCode: action.payload as currencyCodesType
      };
    default:
      return state;
  }
};

export const SetСodes = (
  actionType: "SET_MAIN_CODE" | "SET_FROM_CODE" | "SET_TO_CODE",
  payload: currencyCodesType
) => {
  return {
    type: actionType,
    payload: payload
  } as const;
};

export type actionType = ReturnType<typeof SetСodes>;
