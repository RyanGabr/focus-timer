import React, { useContext, createContext } from "react";

interface TimerContextProps {
  secondsAmount: number;
  setSecondsAmount: React.Dispatch<React.SetStateAction<number>>;
  initialSeconds: number;
  setInitialSeconds: React.Dispatch<React.SetStateAction<number>>;
  pauseOffset: number;
  setPauseOffset: React.Dispatch<React.SetStateAction<number>>;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const SECONDS_AMOUNT_INITIAL_STATE = 25 * 60; // 25 minutes

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [secondsAmount, setSecondsAmount] = React.useState(25 * 60);
  const [initialSeconds, setInitialSeconds] = React.useState(25 * 60);
  const [pauseOffset, setPauseOffset] = React.useState(25 * 60);

  return (
    <TimerContext.Provider
      value={{
        secondsAmount,
        setSecondsAmount,
        initialSeconds,
        setInitialSeconds,
        pauseOffset,
        setPauseOffset,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer(): TimerContextProps {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
