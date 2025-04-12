"use client";

import { memo } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function HeroAnimation() {
  return (
    <div className="w-full max-w-[600px] aspect-square">
      <DotLottieReact
        src="https://lottie.host/dceea26f-f6cd-4d0a-8bbe-11b417de47a4/lWmyaAe1Rb.lottie"
        loop
        autoplay
        className="w-full h-full"
      />
    </div>
  );
}

export default memo(HeroAnimation);
