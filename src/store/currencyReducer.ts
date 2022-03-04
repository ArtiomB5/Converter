import { Dispatch } from "redux";

import {
  axiosResponseDataType,
  currencyCodes,
  getCurrency
} from "../api/index";
import { SetLoading } from "./loadingReducer";

export type stateType = {
  mainСurrencyData: axiosResponseDataType;
  fromСurrencyData: axiosResponseDataType;
};

let initialState: stateType = {
  mainСurrencyData: {} as axiosResponseDataType,
  fromСurrencyData: {} as axiosResponseDataType
};

export const currencyReducer = (
  state: stateType = initialState,
  action: actionType
): stateType => {
  switch (action.type) {
    case "SET_MAIN_СURRENCY":
      return {
        ...state,
        mainСurrencyData: action.payload as axiosResponseDataType
      };
    case "SET_FROM_СURRENCY":
      return {
        ...state,
        fromСurrencyData: action.payload as axiosResponseDataType
      };
    default:
      return state;
  }
};

export const SetMainСurrency = (payload: axiosResponseDataType) => {
  return {
    type: "SET_MAIN_СURRENCY",
    payload: payload
  } as const;
};
export const SetFromСurrency = (payload: axiosResponseDataType) => {
  return {
    type: "SET_FROM_СURRENCY",
    payload: payload
  } as const;
};

export const SetMainСurrencyTC = (currency: currencyCodes) => {
  return (dispatch: Dispatch) => {
    dispatch(SetLoading("main", true));
    getCurrency(currency).then((response) => {
      dispatch(SetMainСurrency(response as axiosResponseDataType));
      dispatch(SetLoading("main", false));
    });
  };
};
export const SetFromСurrencyTC = (currency: currencyCodes) => {
  return (dispatch: Dispatch) => {
    dispatch(SetLoading("from", true));
    getCurrency(currency).then((response) => {
      dispatch(SetFromСurrency(response as axiosResponseDataType));
      dispatch(SetLoading("from", false));
    });
  };
};
export type actionType =
  | ReturnType<typeof SetMainСurrency>
  | ReturnType<typeof SetFromСurrency>;
