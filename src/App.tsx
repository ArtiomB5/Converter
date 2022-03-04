import "./styles.css";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { rootReducerType } from "./store";
import { Header } from "./components/header";
import { MainCurrencyPage } from "./components/mainCurrencyPage";
import { ConverterPage } from "./components/converterPage";
import { Footer } from "./components/footer";
// https://play-lh.googleusercontent.com/f2C5-k49AqU_aEowXEjtYFYirHC8xBdCkosQrPkPffpajid_ECDKRPjyeArPL6LDyCE
// https://www.exchangerate-api.com/docs/free

export default function App() {
  let state = useSelector((state: rootReducerType) => state);
  let currencyCodes = state.codesReducer.currencyCodes;
  let mainСurrencyloadingStatus = state.loadingReducer.mainСurrencyloading;
  let mainСurrencyData = state.currencyReducer.mainСurrencyData;
  let mainСurrencyCode = state.codesReducer.mainСurrencyCode;
  let fromСurrencyloadingStatus = state.loadingReducer.fromСurrencyloading;
  let fromCurrencyCode = state.codesReducer.fromСurrencyCode;
  let toCurrencyCode = state.codesReducer.toСurrencyCode;
  let mainInputField = state.inputFieldsReducer.mainInputData;
  let fromInputField = state.inputFieldsReducer.fromInputData;
  let fromСurrencyData = state.currencyReducer.fromСurrencyData;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainCurrencyPage
              currencyCodes={currencyCodes}
              mainСurrencyloading={mainСurrencyloadingStatus}
              mainСurrencyCode={mainСurrencyCode}
              pageData={mainСurrencyData}
              mainInputField={mainInputField}
            />
          }
        />
        <Route
          path="/converter"
          element={
            <ConverterPage
              currencyCodes={currencyCodes}
              fromСurrencyloading={fromСurrencyloadingStatus}
              pageData={fromСurrencyData}
              fromCurrencyCode={fromCurrencyCode}
              toCurrencyCode={toCurrencyCode}
              fromInputField={fromInputField}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
