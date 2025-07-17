import type { handleSetCustomTimerSchema } from "@/schemas/custom-timer-schema";
import type z from "zod";

export type CustomTimerType = z.infer<typeof handleSetCustomTimerSchema>;
