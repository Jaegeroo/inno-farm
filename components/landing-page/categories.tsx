import { InteractiveButton } from "../ui/interactive-button";
import { TextAnimate } from "../ui/text-animate";
import { memo } from "react";

function Categories() {
  const categories = [
    "Programming & Web3",
    "Marketing & Community",
    "AI Services",
    "Design & UX",
    "Writing & Translation",
    "Business & Consulting",
  ];

  return (
    <div className="container mx-auto space-y-8">
      <div className="space-y-2">
        <TextAnimate
          animation="fadeIn"
          by="line"
          className="text-muted-foreground text-center text-base px-10 md:text-xl"
        >
          Explore Top Skills
        </TextAnimate>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item, index) => (
            <InteractiveButton key={index}>{item}</InteractiveButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Categories);
