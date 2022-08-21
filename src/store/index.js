import { configureStore } from "@reduxjs/toolkit";

const reducerFn = (state = { counter: 0 }, action) => {
  console.log(action);
  if (action.type === "piu") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "meno") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "amount") {
    return { counter: state.counter + action.payload };
  }

  return state;
};

const store = configureStore({ reducer: reducerFn });

export default store;
