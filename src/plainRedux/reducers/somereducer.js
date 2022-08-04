import produce from "immer";
export const initialState = {
  name: "sai",
  age: 12
};

export const somereducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: "ram" };
    case "changeAge":
      // here instead of spread operator, we are using
      // immmer js library to reproduce state.
      return produce(state, (draftState) => {
        draftState.age = Number(draftState.age) + 1;
      });
    default:
      return state;
  }
};
