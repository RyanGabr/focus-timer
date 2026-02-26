import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "@/features/timer/timer-slice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
