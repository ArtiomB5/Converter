type stateType = {
  mainInputData: number;
  fromInputData: number;
};

const initialState: stateType = {
  mainInputData: 1,
  fromInputData: 1
};

export const inputFieldsReducer = (
  state: stateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case "SET_MAIN_INPUT":
      return { ...state, mainInputData: action.payload };
    case "SET_FROM_INPUT":
      return { ...state, fromInputData: action.payload };
    default:
      return state;
  }
};

export const SetInput = (type: "main" | "from", payload: number) => {
  return {
    type: type === "main" ? "SET_MAIN_INPUT" : "SET_FROM_INPUT",
    payload: payload
  } as const;
};

export type actionType = ReturnType<typeof SetInput>;
