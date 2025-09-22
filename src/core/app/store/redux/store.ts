import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { testReducer } from "@/core/features/Test/test";

const rootReducer = combineReducers({
  test: testReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
