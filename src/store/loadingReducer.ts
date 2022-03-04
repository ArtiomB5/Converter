export type stateType = {
  fromСurrencyloading: boolean;
  mainСurrencyloading: boolean;
};

let initialState: stateType = {
  fromСurrencyloading: false,
  mainСurrencyloading: false
};

export const loadingReducer = (
  state: stateType = initialState,
  action: actionType
): stateType => {
  switch (action.type) {
    case "SET_LOADING":
      switch (action.payload.loadingType) {
        case "from":
          return {
            ...state,
            fromСurrencyloading: action.payload.loadingStatus
          };
        case "main":
          return {
            ...state,
            mainСurrencyloading: action.payload.loadingStatus
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export type loadingType = "from" | "main";

export const SetLoading = (
  loadingType: loadingType,
  loadingStatus: boolean
) => {
  return {
    type: "SET_LOADING",
    payload: { loadingType: loadingType, loadingStatus: loadingStatus }
  } as const;
};

export type actionType = ReturnType<typeof SetLoading>;
