import { Button } from "@/components/button";
import { Pause, Play } from "lucide-react";
import { CustomTimer } from "./custom-timer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTimer } from "../timer/timer-slice";

export function Controls() {
  const dispatch = useAppDispatch();
  const { isActive } = useAppSelector((state) => state.timer);

  function handleToggleTimer() {
    dispatch(toggleTimer());
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        onClick={handleToggleTimer}
        variant={isActive ? "warning" : "default"}
      >
        {isActive ? (
          <Pause className="fill-amber-400 text-transparent" size={16} />
        ) : (
          <Play className="fill-zinc-950 text-transparent" size={16} />
        )}
        {isActive ? "Pausar" : "Iniciar"}
      </Button>
      <CustomTimer />
    </div>
  );
}
