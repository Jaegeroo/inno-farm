import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export default function FeatureCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col lg:border-r relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && " dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="bg-primary/10 rounded-md opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full  from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 rounded-md group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full  from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      <div className="text-lg font-bold relative z-10">
        <div className="absolute left-0 inset-y-0 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <div className="flex items-center gap-4 relative z-10 px-5 text-neutral-600 dark:text-neutral-400">
          {icon}
          <span className="text-base group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
      </div>
      <p className=" text-neutral-600 dark:text-neutral-300 relative z-10 px-5">
        {description}
      </p>
    </Card>
  );
}
