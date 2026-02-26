import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { tick } from "./timer-slice";

export function Timer() {
  const dispatch = useAppDispatch();
  const { isActive, activePresetSeconds, secondsElapsed } = useAppSelector(
    (state) => state.timer,
  );

  useEffect(() => {
    let interval: number;

    if (isActive) {
      interval = window.setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, dispatch]);

  const timerLeft = activePresetSeconds - secondsElapsed;
  const minutes = Math.floor(timerLeft / 60);
  const seconds = timerLeft % 60;

  const minutesDisplay = String(minutes).padStart(2, "0");
  const secondsDisplay = String(seconds).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 text-8xl md:text-[10rem]">
      <div>
        {minutesDisplay}:{secondsDisplay}
      </div>
    </div>
  );
}
