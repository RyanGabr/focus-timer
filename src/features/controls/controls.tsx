import { Button } from "@/components/button";
import { Pause, Play } from "lucide-react";
import { CustomTimer } from "./custom-timer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTimer } from "../timer/timer-slice";
import { TextMorph } from "torph/react";

export function Controls() {
  const dispatch = useAppDispatch();
  const { isActive } = useAppSelector((state) => state.timer);

  function handleToggleTimer() {
    dispatch(toggleTimer());
  }

  return (
    <div className="flex items-center justify-center gap-2 absolute bottom-4 sm:static w-[93%] sm:max-w-xs">
      <Button
        onClick={handleToggleTimer}
        variant={isActive ? "warning" : "default"}
        className="flex-1 py-2.5 text-lg"
      >
        {isActive ? (
          <Pause className="fill-amber-400 text-transparent" size={16} />
        ) : (
          <Play className="fill-zinc-950 text-transparent" size={16} />
        )}
        <TextMorph>{isActive ? "Pausar" : "Iniciar"}</TextMorph>
      </Button>

      <CustomTimer />
    </div>
  );
}
