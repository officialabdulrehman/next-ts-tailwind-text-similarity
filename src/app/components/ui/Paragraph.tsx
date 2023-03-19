import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const paragraphVariants = cva(
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
    VariantProps<typeof paragraphVariants> {}

export const Paragraph = forwardRef<HTMLParagraphElement, Props>(
  ({ className, size, children, ...props }: Props, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ size, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";
