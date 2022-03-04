import { currencyCodesType } from "../../currencyCodes";
import { useDispatch } from "react-redux";
import {
  SetMainСurrencyTC,
  SetFromСurrencyTC
} from "../../store/currencyReducer";
import { SetСodes } from "../../store/codesReducer";
import { currencyCodes } from "../../api";
import { useEffect } from "react";
import * as style from "./style";
import * as React from "react";

type propsType = {
  currencyCodes: currencyCodesType[];
  selectedCode: currencyCodes;
  selectorType: "SET_MAIN_CODE" | "SET_FROM_CODE" | "SET_TO_CODE";
};

export const UISelect = (props: propsType) => {
  let dispatch = useDispatch();

  const optionsRender = () => {
    return props.currencyCodes.map((i: currencyCodesType) => {
      return (
        <style.option
          value={i.currencyName}
          key={i.currencyCode}
          selected={props.selectedCode === i.currencyCode}
        >
          {i.currencyName}
        </style.option>
      );
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      SetСodes(
        props.selectorType,
        props.currencyCodes.filter(
          (i) => i.currencyName === event.currentTarget.value
        )[0] as currencyCodesType
      )
    );
  };

  useEffect(() => {
    if (props.selectorType === "SET_MAIN_CODE" && props.selectedCode) {
      dispatch(SetMainСurrencyTC(props.selectedCode));
    }
    if (props.selectorType === "SET_FROM_CODE" && props.selectedCode) {
      dispatch(SetFromСurrencyTC(props.selectedCode));
    }
  }, [props.selectedCode]);
  return (
    <>
      <style.select
        onChange={changeHandler}
        value={
          props.currencyCodes.find((i) => i.currencyCode === props.selectedCode)
            ?.currencyName
        }
      >
        {optionsRender()}
      </style.select>
    </>
  );
};
