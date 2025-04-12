import { cn } from "@/lib/utils";
import { Button } from "./button";

export default function GetStartedButton({
  className,
  size,
}: {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}) {
  return (
    <Button className={cn("font-dm-sans", className)} size={size}>
      Get Started
    </Button>
  );
}
