import {
  IconBox,
  IconBrandOpenai,
  IconContract,
  IconCurrencyBitcoin,
  IconCurrencyEthereum,
  IconCurrencySolana,
  IconId,
} from "@tabler/icons-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Logo } from "./header";

export default function FeatureOrbits() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles>
        <IconBrandOpenai className="text-primary size-20" />
        <IconBox className="text-primary size-20" />
        <IconId className="text-primary size-20" />
        <IconContract className="text-primary size-20" />
      </OrbitingCircles>
      <Logo />
      <OrbitingCircles radius={100} reverse>
        <IconCurrencyBitcoin className="text-primary !size-20" />
        <IconCurrencyEthereum className="text-primary !size-20" />
        <IconCurrencySolana className="text-primary !size-20" />
      </OrbitingCircles>
    </div>
  );
}
