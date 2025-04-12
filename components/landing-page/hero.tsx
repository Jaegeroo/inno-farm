import HeroAnimation from "./hero-animation";
import HeroSearchBar from "./hero-search-bar";
import { LineShadowText } from "../ui/line-shadow-text";
import { TextAnimate } from "../ui/text-animate";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import { memo } from "react";

function Hero() {
  return (
    <div className="min-h-[700px] mt-20 mx-4">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center s">
          <div className="space-y-4 lg:space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-space-grotesk leading-tight">
              The Future of Work
              <br />
              is{" "}
              <LineShadowText className="animate-line-shadow text-primary inline-block">
                Decentralized
              </LineShadowText>
            </h1>
            <TextAnimate
              animation="slideUp"
              by="word"
              className="text-lg md:text-xl lg:text-3xl text-muted-foreground font-space-grotesk"
            >
              AI, Blockchain, Opportunity.
            </TextAnimate>
            <div className="mt-10">
              <HeroSearchBar />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <HeroAnimation />
        </div>
      </div>
    </div>
  );
}

export default memo(Hero);
