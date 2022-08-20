import { configureStore } from "@reduxjs/toolkit";

const reducerFn = (state = { counter: 0 }, action) => {
  console.log(state);
  if (action.type === "piu") {
    return { counter: state.counter + 1 };
  }

  return state;
};

const store = configureStore({ reducer: { reducerFn } });

export default store;
