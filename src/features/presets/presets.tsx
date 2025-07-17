import { Button } from "@/components/button";
import SoftFlower from "@/assets/icons/soft-flower.png";
import Drop from "@/assets/icons/drop.png";
import Dots from "@/assets/icons/dots.png";
import { useTimer } from "@/context/timer-context";

export function Presets() {
  const { setSecondsAmount } = useTimer();

  function setTimerPomodoro() {
    setSecondsAmount(25 * 60); // 25 minutes
  }

  function setTimerShortBreak() {
    setSecondsAmount(5 * 60); // 5 minutes
  }

  function setTimerLongBreak() {
    setSecondsAmount(15 * 60); // 15 minutes
  }

  return (
    <>
      <div className="flex items-center justify-center gap-3 md:hidden">
        <Button
          onClick={setTimerPomodoro}
          variant="secondary"
          className="w-12 h-12"
        >
          <img src={SoftFlower} alt="" className="w-[20px]" />
        </Button>
        <Button
          onClick={setTimerShortBreak}
          variant="secondary"
          className="w-12 h-12"
        >
          <img src={Drop} alt="" className="w-[14px]" />
        </Button>
        <Button
          onClick={setTimerLongBreak}
          variant="secondary"
          className="w-12 h-12"
        >
          <img src={Dots} alt="" className="w-[20px]" />
        </Button>
      </div>
      <div className="items-center justify-center gap-3 hidden md:flex">
        <Button onClick={setTimerPomodoro} variant="secondary">
          <img src={SoftFlower} alt="" className="w-[14px]" />
          Pomodoro
        </Button>
        <Button onClick={setTimerShortBreak} variant="secondary">
          <img src={Drop} alt="" className="w-[12px]" />
          Curta
        </Button>
        <Button onClick={setTimerLongBreak} variant="secondary">
          <img src={Dots} alt="" className="w-[16px]" />
          Longa
        </Button>
      </div>
    </>
  );
}
