import "./styles.css";
import { useReducer } from "react";

const simpleState = {
  hisName: "",
  herName: "",
  isFlamesCalculated: false,
  lovePercentage: 0
};

export const flamesArr = [
  "Friends👩🏼‍🤝‍👩🏼",
  "Lovers👨‍❤️‍💑",
  "Affectionate🤩",
  "Marraige👨‍👩‍👦",
  "Enemies😡",
  "Sisters🍸"
];

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "updateHisName":
      return {
        ...state,
        hisName: action.payload
      };
    case "updateHerName":
      return {
        ...state,
        herName: action.payload
      };
    case "doFlames":
      let matchValue = state.hisName.length + state.herName.length;
      console.log(matchValue);
      Array.from(state.hisName).forEach((ele) => {
        if (state.herName.includes(ele)) {
          matchValue -= 2;
        }
      });
      console.log(matchValue);
      if (matchValue > 6) {
        matchValue = Math.round(matchValue / 6);
      }
      return {
        ...state,
        ...{ lovePercentage: matchValue, isFlamesCalculated: true }
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatchaction] = useReducer(reducerFn, simpleState);
  console.log(state, "state");
  return (
    <div className="App">
      <br />
      <br />
      Flames application.
      <br />
      <label>Enter your name: </label>
      <input
        onChange={(e) => {
          dispatchaction({
            type: "updateHisName",
            payload: e.target.value
          });
        }}
      ></input>
      <br />
      <br />
      <label>Enter your lover name: </label>
      <input
        onChange={(e) => {
          dispatchaction({
            type: "updateHerName",
            payload: e.target.value
          });
        }}
      ></input>
      <br />
      <br />
      <button
        onClick={() => {
          dispatchaction({
            type: "doFlames"
          });
        }}
        disabled={!state.hisName || !state.herName}
      >
        Do Flames
      </button>
      <br />
      {state.isFlamesCalculated && (
        <div>Your FLAMES result is: {flamesArr[state.lovePercentage - 1]}</div>
      )}
    </div>
  );
}
