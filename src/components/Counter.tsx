import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counter";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h1>Counter App:</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
