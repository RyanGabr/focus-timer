import { z } from "zod";

export const handleSetCustomTimerSchema = z.object({
  minutes: z.coerce
    .number("Formato inválido")
    .max(999, "Máximo permitido 999")
    .min(0, "Mínimo permitido 0"),
  seconds: z.coerce
    .number("Formato inválido")
    .max(999, "Máximo permitido 999")
    .min(0, "Mínimo permitido 0"),
});
