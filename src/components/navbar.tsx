import { Button } from "./button";

export function Navbar() {
  return (
    <div className="w-full fixed top-0 flex items-center justify-between px-5 py-[14px]">
      <div>
        <span className="font-semibold text-lg cursor-default">Focus Timer</span>
      </div>
      <div>
        <Button>GitHub</Button>
      </div>
    </div>
  );
}
