import { Navbar } from "./components/navbar";
import { Timer } from "./features/timer/timer";

export function App() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-10 h-screen">
        <Timer />
      </main>
    </div>
  );
}
