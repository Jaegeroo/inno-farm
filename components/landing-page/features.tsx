import {
  IconContract,
  IconBox,
  IconChecklist,
  IconId,
} from "@tabler/icons-react";
import { TextAnimate } from "../ui/text-animate";
import { memo } from "react";
import FeatureCard from "./feature-card";
import FeatureOrbits from "./feature-orbits";

function Features() {
  const features = [
    {
      title: "AI-Powered Matching",
      description:
        "Our advanced AI connects freelancers with Web3 projects that perfectly align with their skills and expertise.",
      icon: (
        <IconChecklist className="size-8 animate-wiggle" strokeWidth={1.5} />
      ),
    },
    {
      title: "Blockchain-Secured Payments",
      description:
        "Enjoy fast, transparent, and secure transactions powered by blockchain technology.",
      icon: <IconBox className="size-8 animate-wiggle" strokeWidth={1.5} />,
    },
    {
      title: "Smart Contract Escrow",
      description:
        "Trust our smart contracts to hold funds securely until project milestones are met.",
      icon: (
        <IconContract className="size-8 animate-wiggle" strokeWidth={1.5} />
      ),
    },
    {
      title: "Verified Profiles",
      description:
        "Work with confidence, our rigorous verification ensures only trusted freelancers and clients join the movement.",
      icon: <IconId className="size-8 animate-wiggle" strokeWidth={1.5} />,
    },
  ];
  return (
    <div className="container mx-auto space-y-8 mt-20">
      <div className="space-y-2">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-center text-2xl md:text-3xl text-primary font-bold"
        >
          Unlock the Power of Our Platform
        </TextAnimate>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-4">
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} index={index} />
          ))}
        </div>
        <div>
          <FeatureOrbits />
        </div>
      </div>
    </div>
  );
}

export default memo(Features);
