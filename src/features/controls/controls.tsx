import { Button } from "@/components/button";
import { useTimer } from "@/context/timer-context";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CustomTimer } from "./custom-timer";

export function Controls() {
  const {
    secondsAmount,
    setSecondsAmount,
  } = useTimer();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimerRef = useRef<number | null>(null);
  const initialTimeRef = useRef<number>(secondsAmount);

  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (isTimerActive) {
      startTimerRef.current = Date.now();
      initialTimeRef.current = secondsAmount;

      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - startTimerRef.current!) / 1000);
        const newRemaining = Math.max(initialTimeRef.current - elapsedSeconds, 0);

        setSecondsAmount(newRemaining);

        if (newRemaining === 0) {
          clearInterval(intervalRef.current!);
          setIsTimerActive(false);
        }
      }, 500);
    } else {
      clearInterval(intervalRef.current!);
    }

    return () => clearInterval(intervalRef.current!);
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
