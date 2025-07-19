import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Sparkle } from "lucide-react";
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
import { useTimer } from "@/context/timer-context";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CustomTimerType } from "@/types/custom-timer-type";
import { handleSetCustomTimerSchema } from "@/schemas/custom-timer-schema";
import { useState } from "react";

export function CustomTimer() {
  const { secondsAmount, setSecondsAmount, setInitialSeconds, setPauseOffset } =
    useTimer();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

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

    setSecondsAmount(customTimer);
    setInitialSeconds(customTimer);
    setPauseOffset(customTimer);
    
    setIsDialogOpen(false);

    reset();
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Sparkle className="fill-zinc-50 text-transparent" size={16} />
          Personalizado
        </Button>
      </DialogTrigger>
      <DialogContent className="w-md">
        <DialogHeader className="items-center pt-10">
          <DialogTitle className="text-2xl tracking-tight">
            Tempo personalizado
          </DialogTitle>
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
