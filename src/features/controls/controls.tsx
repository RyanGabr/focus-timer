import { Button } from "@/components/button";
import { useTimer } from "@/context/timer-context";
import { Pause, Play, Sparkle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Controls() {
  const intervalRef = useRef(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const { setSecondsAmount } = useTimer();

  useEffect(() => {
    if (isTimerActive) {
      intervalRef.current = setInterval(() => {
        setSecondsAmount((state) => {
          if (state === 0) {
            clearInterval(intervalRef.current);
            setIsTimerActive(false);
            return 0;
          }
          return state - 1;
        });
      }, 1000) as unknown as number;
    } else {
      clearInterval(intervalRef.current);
    }
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
      <Button variant="secondary">
        <Sparkle className="fill-zinc-50 text-transparent" size={16} />
        Personalizado
      </Button>
    </div>
  );
}
