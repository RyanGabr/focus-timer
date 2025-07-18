import { useTimer } from "@/context/timer-context";

export function Timer() {
  const { secondsAmount } = useTimer();

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className="flex items-center gap-2 text-8xl md:text-[10rem]">
      <div>{minutes.toString().padStart(2, "0")}</div>
      <div>:</div>
      <div>{seconds.toString().padStart(2, "0")}</div>
    </div>
  );
}
