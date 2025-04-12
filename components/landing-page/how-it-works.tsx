import { TextAnimate } from "../ui/text-animate";
import { memo } from "react";
import ClientCard from "./client-card";
import FreelancerCard from "./freelancer-card";

function HowItWorks() {
  return (
    <div className="container mx-auto space-y-8 mt-20 ">
      <div className="space-y-2">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-center text-2xl md:text-3xl text-primary font-bold"
        >
          Discover Simple Steps To Connect
        </TextAnimate>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
          <ClientCard />
          <FreelancerCard />
        </div>
      </div>
    </div>
  );
}

export default memo(HowItWorks);
