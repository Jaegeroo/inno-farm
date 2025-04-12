"use client";

import { memo } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function ClientCardAnimation({ src }: { src: string }) {
  return (
    <div className="w-full max-w-[250px] aspect-square">
      <DotLottieReact src={src} loop autoplay className="w-full h-full" />
    </div>
  );
}

export default memo(ClientCardAnimation);
