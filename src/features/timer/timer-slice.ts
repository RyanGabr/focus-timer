import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const SECONDS_AMOUNT_INITIAL_STATE = 25 * 60; // 25 minutes

interface TimerState {
  isActive: boolean;
  secondsElapsed: number;
  activePresetSeconds: number;
}

const initialState: TimerState = {
  isActive: false,
  secondsElapsed: 0,
  activePresetSeconds: SECONDS_AMOUNT_INITIAL_STATE,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    toggleTimer: (state) => {
      state.isActive = !state.isActive;
    },
    tick: (state) => {
      if (state.secondsElapsed < state.activePresetSeconds) {
        state.secondsElapsed += 1;
      } else {
        state.isActive = false;
      }
    },
    setPreset: (state, action: PayloadAction<number>) => {
      state.activePresetSeconds = action.payload;
      state.secondsElapsed = 0;
      state.isActive = false;
    },
  },
});

export const { toggleTimer, tick, setPreset } = timerSlice.actions;
export default timerSlice.reducer;
