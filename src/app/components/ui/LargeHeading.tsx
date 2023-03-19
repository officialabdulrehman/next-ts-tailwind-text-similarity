import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const largeHeadingVariants = cva(
  "text-black dark:text-white text center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md-text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof largeHeadingVariants> {}

export const LargeHeading = forwardRef<HTMLHeadingElement, Props>(
  ({ className, size, children, ...props }: Props, ref) => {
    return (
      <p
        ref={ref}
        className={cn(largeHeadingVariants({ size, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

LargeHeading.displayName = "LargeHeading";
