import { useReducer } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="w-full bg-gray-300 shadow-xl m-auto">
      <h2>Count: {state.count}</h2>
      <button  className="border border-black"onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button className="border border-black"onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button className="border border-black"onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
