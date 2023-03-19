import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

const styleVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof styleVariants> {}

export const Paragraph = forwardRef<HTMLParagraphElement, Props>(
  ({ className, size, children, ...props }: Props, ref) => {
    return (
      <p
        ref={ref}
        className={cn(styleVariants({ size, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";
