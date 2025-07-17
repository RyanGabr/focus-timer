import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// !IMPORTANT: Icon size to use => 16

const buttonVariants = cva(
  "rounded-full font-semibold px-[14px] py-2 flex items-center justify-center gap-[5px] text-base cursor-pointer transition-all",
  {
    variants: {
      variant: {
        default: "bg-zinc-50 text-zinc-950 hover:bg-zinc-200",
        secondary: "bg-white/10 text-zinc-50 hover:bg-white/15"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
