import Dots from "@/assets/icons/dots.png";
import Drop from "@/assets/icons/drop.png";
import SoftFlower from "@/assets/icons/soft-flower.png";
import { Button } from "@/components/button";
import { useAppDispatch } from "@/store/hooks";
import { setPreset } from "../timer/timer-slice";

const SECONDS_PER_MINUTE = 60; // 1 minute

const TIMER_PRESETS = {
  pomodoro: 25 * SECONDS_PER_MINUTE, // 25 minutes
  shortBreak: 5 * SECONDS_PER_MINUTE, // 5 minutes
  longBreak: 15 * SECONDS_PER_MINUTE, // 15 minutes
};

export function Presets() {
  const dispatch = useAppDispatch();

  function setTimerPreset(preset: number) {
    dispatch(setPreset(preset));
  }

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Button
          onClick={() => setTimerPreset(TIMER_PRESETS.pomodoro)}
          variant="secondary"
        >
          <img src={SoftFlower} alt="" className="w-[14px]" />
          Pomodoro
        </Button>
        <Button
          onClick={() => setTimerPreset(TIMER_PRESETS.shortBreak)}
          variant="secondary"
        >
          <img src={Drop} alt="" className="w-[12px]" />
          Curta
        </Button>
        <Button
          onClick={() => setTimerPreset(TIMER_PRESETS.longBreak)}
          variant="secondary"
        >
          <img src={Dots} alt="" className="w-[16px]" />
          Longa
        </Button>
      </div>
    </>
  );
}
