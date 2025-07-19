import { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { useTimer } from "./context/timer-context";
import { Controls } from "./features/controls/controls";
import { Presets } from "./features/presets/presets";
import { Timer } from "./features/timer/timer";

export function App() {
  const { secondsAmount } = useTimer();

  useEffect(() => {
    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;

    document.title =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0") +
      " - Focus Timer";
  }, [secondsAmount]);

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
