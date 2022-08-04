import { useDispatch, useSelector } from "react-redux";

import { changeAge, changeName } from "./actions";
export const ReduxExample = () => {
  const reducerState = useSelector((state) => state.somereducer);
  const dispatch = useDispatch();
  console.log(reducerState, " ... state");
  return (
    <>
      {reducerState.age}
      <br />
      <button
        onClick={() => {
          dispatch(changeName);
        }}
      >
        change name
      </button>
      <br />
      {reducerState.name}
      <br />
      <button
        onClick={() => {
          dispatch(changeAge);
        }}
      >
        change age
      </button>
      <br />
    </>
  );
};
