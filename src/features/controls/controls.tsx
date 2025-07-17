import { Button } from "@/components/button";
import {
  SECONDS_AMOUNT_INITIAL_STATE,
  useTimer,
} from "@/context/timer-context";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CustomTimer } from "./custom-timer";

export function Controls() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimerRef = useRef<number | null>(null);

  const [isTimerActive, setIsTimerActive] = useState(false);

  const { secondsAmount, setSecondsAmount, pauseOffset, setPauseOffset } =
    useTimer();

  useEffect(() => {
    if (isTimerActive) {
      startTimerRef.current =
        Date.now() - (SECONDS_AMOUNT_INITIAL_STATE - pauseOffset) * 1000;

      intervalRef.current = setInterval(() => {
        if (!startTimerRef.current) return;

        const elapsed = Math.floor((Date.now() - startTimerRef.current) / 1000);
        const remaining = Math.max(SECONDS_AMOUNT_INITIAL_STATE - elapsed, 0);

        setSecondsAmount(remaining);

        if (remaining === 0) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsTimerActive(false);
        }
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setPauseOffset(secondsAmount);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTimerActive]);

  function toggleTimer() {
    setIsTimerActive((state) => !state);
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        onClick={toggleTimer}
        variant={isTimerActive ? "warning" : "default"}
      >
        {!isTimerActive && (
          <Play className="fill-zinc-950 text-transparent" size={16} />
        )}
        {isTimerActive && (
          <Pause className="fill-amber-400 text-transparent" size={16} />
        )}
        {isTimerActive ? "Pausar" : "Iniciar"}
      </Button>
      <CustomTimer />
    </div>
  );
}
