import { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Controls } from "./features/controls/controls";
import { Presets } from "./features/presets/presets";
import { Timer } from "./features/timer/timer";
import { useAppSelector } from "./store/hooks";

export function App() {
  const { activePresetSeconds, secondsElapsed } = useAppSelector(
    (state) => state.timer,
  );

  useEffect(() => {
    const timerLeft = activePresetSeconds - secondsElapsed;
    const minutes = Math.floor(timerLeft / 60);
    const seconds = timerLeft % 60;

    document.title =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0") +
      " - Focus Timer";
  }, [activePresetSeconds, secondsElapsed]);

  return (
    <div className="bg-zinc-950">
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-10 h-screen">
        <Presets />
        <Timer />
        <Controls />
      </main>
    </div>
  );
}
