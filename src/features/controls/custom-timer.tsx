import { Button } from "@/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { handleSetCustomTimerSchema } from "@/schemas/custom-timer-schema";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { CustomTimerType } from "@/types/custom-timer-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cog, Sparkle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setPreset } from "../timer/timer-slice";

export function CustomTimer() {
  const dispatch = useAppDispatch();
  const { activePresetSeconds, secondsElapsed } = useAppSelector(
    (state) => state.timer,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const timerLeft = activePresetSeconds - secondsElapsed;
  const minutes = Math.floor(timerLeft / 60);
  const seconds = timerLeft % 60;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(handleSetCustomTimerSchema),
  });

  function handleSetCustomTimer(data: CustomTimerType) {
    const customTimer = data.minutes * 60 + data.seconds;
    dispatch(setPreset(customTimer));

    setIsDialogOpen(false);
    reset();
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="py-3">
          <Cog size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-md">
        <DialogHeader className="items-center pt-10">
          <DialogTitle className="text-2xl">Tempo personalizado</DialogTitle>
          <DialogDescription className="text-base">
            Defina o tempo que deseja no momento.
          </DialogDescription>
        </DialogHeader>
        <form
          id="custom-timer-form"
          onSubmit={handleSubmit(handleSetCustomTimer)}
          className="flex gap-5 my-7"
        >
          <div className="space-y-2">
            <Label className="text-white/50">Minutos</Label>
            <Input
              {...register("minutes")}
              autoComplete="off"
              className="p-5 text-3xl"
              placeholder={String(minutes).padStart(2, "0")}
            />
            {errors.minutes && (
              <span className="font-semibold">{errors.minutes.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-white/50">Segundos</Label>
            <Input
              {...register("seconds")}
              autoComplete="off"
              className="p-5 text-3xl"
              placeholder={String(seconds).padStart(2, "0")}
            />
            {errors.seconds && (
              <span className="font-semibold">{errors.seconds.message}</span>
            )}
          </div>
        </form>
        <DialogFooter className="w-full">
          <DialogClose asChild className="flex-1">
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button
            type="submit"
            className="flex-1 py-3"
            form="custom-timer-form"
          >
            <Sparkle className="fill-zinc-950 text-transparent" size={20} />
            Definir tempo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
