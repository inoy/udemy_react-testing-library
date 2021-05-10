import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import customCounterReducer from "../features/counter/customCounter/customCounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customCounter: customCounterReducer,
  },
});
