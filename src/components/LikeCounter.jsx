import { useReducer } from "react";
import { initialValue, Reducer } from "./Redux/Reducer";

const LikeCounter = () => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
