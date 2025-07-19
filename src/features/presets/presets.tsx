import { Button } from "@/components/button";
import SoftFlower from "@/assets/icons/soft-flower.png";
import Drop from "@/assets/icons/drop.png";
import Dots from "@/assets/icons/dots.png";
import { useTimer } from "@/context/timer-context";

const SECONDS_PER_MINUTE = 60; // 1 minute

const TIMER_PRESETS = {
  pomodoro: 25 * SECONDS_PER_MINUTE, // 25 minutes
  shortBreak: 5 * SECONDS_PER_MINUTE, // 5 minutes
  longBreak: 15 * SECONDS_PER_MINUTE, // 15 minutes
};

export function Presets() {
  const { setSecondsAmount } = useTimer();

  function setTimerPreset(durationInSeconds: number) {
    setSecondsAmount(durationInSeconds);
  }

  return (
    <>
      <div className="flex items-center justify-center gap-3 md:hidden">
        <Button
          onClick={() => setTimerPreset(TIMER_PRESETS.pomodoro)}
          variant="secondary"
          className="w-12 h-12"
        >
          <img src={SoftFlower} alt="" className="w-[20px]" />
        </Button>
        <Button
          onClick={() => setTimerPreset(TIMER_PRESETS.shortBreak)}
          variant="secondary"
          className="w-12 h-12"
        >
          <img src={Drop} alt="" className="w-[14px]" />
        </Button>
        <Button
          onClick={() => setTimerPreset(TIMER_PRESETS.longBreak)}
          variant="secondary"
          className="w-12 h-12"
        >
          <img src={Dots} alt="" className="w-[20px]" />
        </Button>
      </div>
      <div className="items-center justify-center gap-3 hidden md:flex">
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
