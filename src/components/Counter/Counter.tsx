import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { counterAction } from "../../store/reducers/counter";

const Counter = () => {
  const counter = useAppSelector((state) => state.counter.counter);
  const showCounter = useAppSelector((state) => state.counter.showCounter);

  const dispatch = useAppDispatch();

  const refInput = useRef<HTMLInputElement>(null);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () => {
    let number: number = parseInt(refInput.current!.value);
    console.log(typeof number);
    dispatch(counterAction.increase(number)); // {type: SOME_UNIQUE_ACTION, payload: EXTRA DATA }
  };

  const showCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <div>
      {showCounter && <p>{counter}</p>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>

      <input ref={refInput} type="number" defaultValue="0" />

      <button onClick={increaseHandler}>increase</button>
      <button onClick={showCounterHandler}>show counter</button>
    </div>
  );
};

export default Counter;
