import { cn } from "@/utils/helper";
import { JSX } from "react";

interface IBadgeProps {
  text: string;
  variant: "warning";
  className?: string;
}
const variants: Record<string, string> = {
  warning:
    "bg-red-100 text-error rounded-full py-1.5 px-3.5 justify-center items-center",
};
function Badge({ text, variant, className }: IBadgeProps): JSX.Element {
  return <p className={cn(variants[variant], className)}>{text}</p>;
}
export default Badge;
