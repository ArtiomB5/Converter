import { useDispatch } from "react-redux";
import { axiosResponseDataType, currencyCodes } from "../../api";
import { currencyCodesType } from "../../currencyCodes";
import { SetInput } from "../../store/inputFieldsReducer";
import { UIInput } from "../../UI/UIInput";
import { ChangeEvent } from "react";
import * as style from "./style";

type propsType = {
  fromInputField: number;
  pageData: axiosResponseDataType;
  fromCurrencyCode: currencyCodesType;
  toCurrencyCode: currencyCodesType;
};

export const UIFromToRender = (props: propsType) => {
  let dispatch = useDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(SetInput("from", Number(event.currentTarget.value)));
  };

  return (
    <style.wrapper>
      <UIInput value={props.fromInputField} onChange={changeHandler} />
      <div style={{ width: "50%", textAlign: "center" }}>
        {(
          Math.trunc(
            props.fromInputField *
              Number(
                props.pageData.rates[
                  props.toCurrencyCode.currencyCode as currencyCodes
                ]
              ) *
              100
          ) / 100
        ).toFixed(2)}
      </div>
    </style.wrapper>
  );
};
