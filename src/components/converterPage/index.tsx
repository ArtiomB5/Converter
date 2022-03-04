import { UISelect } from "../../UI/UISelect";
import { currencyCodes, axiosResponseDataType } from "../../api/index";
import { currencyCodesType } from "../../currencyCodes";
import { UIFromToRender } from "../../UI/UIFromToRender";
import * as style from "./style";

type propsType = {
  currencyCodes: currencyCodesType[];
  fromСurrencyloading: boolean;
  fromCurrencyCode: currencyCodesType;
  toCurrencyCode: currencyCodesType;
  fromInputField: number;
  pageData: axiosResponseDataType;
};

export const ConverterPage = (props: propsType) => {
  let selectedCodeFrom = props.fromCurrencyCode.currencyCode as currencyCodes;
  let selectedCodeTo = props.toCurrencyCode.currencyCode as currencyCodes;

  return (
    <style.column>
      <style.row>
        <UISelect
          currencyCodes={props.currencyCodes}
          selectedCode={selectedCodeFrom}
          selectorType={"SET_FROM_CODE"}
        />
        <UISelect
          currencyCodes={props.currencyCodes}
          selectedCode={selectedCodeTo}
          selectorType={"SET_TO_CODE"}
        />
      </style.row>
      <style.row>
        {props.pageData.rates && (
          <UIFromToRender
            fromInputField={props.fromInputField}
            pageData={props.pageData}
            fromCurrencyCode={props.fromCurrencyCode}
            toCurrencyCode={props.toCurrencyCode}
          />
        )}
      </style.row>
    </style.column>
  );
};
