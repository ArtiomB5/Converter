import { UISelect } from "../../UI/UISelect";
import { UIRates } from "../../UI/UIRates";
import { UILoading } from "../../UI/UILoading";
import { currencyCodes, axiosResponseDataType } from "../../api/index";
import { currencyCodesType } from "../../currencyCodes";
import { SetInput } from "../../store/inputFieldsReducer";
import * as style from "./style";
import { useDispatch } from "react-redux";
import { UIInput } from "../../UI/UIInput";

type propsType = {
  currencyCodes: currencyCodesType[];
  mainСurrencyloading: boolean;
  mainСurrencyCode: currencyCodesType;
  pageData: axiosResponseDataType;
  mainInputField: number;
};

export const MainCurrencyPage = (props: propsType) => {
  let dispatch = useDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim() !== "") {
      dispatch(SetInput("main", Number(event.currentTarget.value)));
    } else {
      alert("Please fill in textarea!");
    }
  };

  return (
    <style.mainCurrencyPage>
      <style.currencySelection>
        <UIInput value={props.mainInputField} onChange={changeHandler} />
        <UISelect
          currencyCodes={props.currencyCodes}
          selectedCode={props.mainСurrencyCode.currencyCode as currencyCodes}
          selectorType={"SET_MAIN_CODE"}
        />
      </style.currencySelection>

      <div>{props.mainСurrencyloading ? <UILoading /> : ""}</div>
      {!props.mainСurrencyloading && props.pageData.base_code && (
        <style.mainCurrencyRates>
          <UIRates
            rates={props.pageData.rates}
            selectedCode={props.mainСurrencyCode.currencyCode as currencyCodes}
            sum={props.mainInputField}
          />
        </style.mainCurrencyRates>
      )}
    </style.mainCurrencyPage>
  );
};
