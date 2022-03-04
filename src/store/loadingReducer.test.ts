import * as loadingReducer from "./loadingReducer";

let initialState: loadingReducer.stateType = {
  fromСurrencyloading: false,
  mainСurrencyloading: false
};

beforeEach(() => {});

test("should create loadingType: main action", () => {
  expect(loadingReducer.SetLoading("main", true)).toEqual({
    type: "SET_LOADING",
    payload: { loadingType: "main", loadingStatus: true }
  });
});

test("should create loadingType: from action", () => {
  expect(loadingReducer.SetLoading("from", true)).toEqual({
    type: "SET_LOADING",
    payload: { loadingType: "from", loadingStatus: true }
  });
});

test("should return new main loadinng state", () => {
  let action = loadingReducer.SetLoading("main", true);
  expect(loadingReducer.loadingReducer(initialState, action)).toEqual({
    fromСurrencyloading: false,
    mainСurrencyloading: true
  });
});

test("should return new from loading state", () => {
  let action = loadingReducer.SetLoading("from", true);
  expect(loadingReducer.loadingReducer(initialState, action)).toEqual({
    fromСurrencyloading: true,
    mainСurrencyloading: false
  });
});
