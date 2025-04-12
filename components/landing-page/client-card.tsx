import {
  IconArrowNarrowRight,
  IconBriefcase2,
  IconCoinBitcoin,
  IconUserCheck,
} from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ClientCardAnimation from "./client-card-animation";

export default function ClientCard() {
  return (
    <Card className="p-4">
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <ClientCardAnimation src="https://lottie.host/e55d3429-aa11-4b9e-81c9-8f4b0ac19cb4/s3EQjnxYK9.lottie" />
        <div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h5 className="text-primary text-2xl font-bold">Clients</h5>
              <Link
                href="#"
                className="hover:text-primary  underline flex items-center justify-center gap-2 text-center"
              >
                Start Hiring <IconArrowNarrowRight strokeWidth={1.5} />
              </Link>
            </div>
            <div className="pt-2">
              <div className="flex items-start gap-2">
                <IconBriefcase2 strokeWidth={1.5} className="mt-1" />
                <div>
                  <p className="text-lg font-bold">Post Job</p>
                  <span className="text-muted-foreground">
                    List your project and connect with skilled freelancers.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <IconUserCheck strokeWidth={1.5} className="mt-1" />
                <div>
                  <p className="text-lg font-bold">Hire Talent</p>
                  <span className="text-muted-foreground">
                    Find and onboard top professionals for your tasks.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <IconCoinBitcoin strokeWidth={1.5} className="mt-1" />
                <div>
                  <p className="text-lg font-bold">Pay via Escrow</p>
                  <span className="text-muted-foreground">
                    Secure payments with our trusted escrow system.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
