import {
  IconArrowNarrowRight,
  IconFileCv,
  IconCoinBitcoin,
  IconChecklist,
} from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import ClientCardAnimation from "./client-card-animation";

export default function FreelancerCard() {
  return (
    <Card className="p-4">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <ClientCardAnimation src="https://lottie.host/7df6f0e5-aea7-46cc-b80b-080620c6a49a/SbnPXP3gwi.lottie" />
        <div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h5 className="text-primary text-2xl font-bold">Freelancer</h5>
              <Link
                href="#"
                className="hover:text-primary underline flex items-center justify-center gap-2 text-center"
              >
                Start Earning <IconArrowNarrowRight strokeWidth={1.5} />
              </Link>
            </div>
            <div className="pt-2">
              <div className="flex items-start gap-2">
                <IconFileCv strokeWidth={1.5} className="mt-1" />
                <div>
                  <p className="text-lg font-bold">Create Profile</p>
                  <span className="text-muted-foreground">
                    Build a standout profile to showcase your skills.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <IconChecklist strokeWidth={1.5} className="mt-1" />
                <div>
                  <p className="text-lg font-bold">Get Matched by AI</p>
                  <span className="text-muted-foreground">
                    Connect with projects tailored to your expertise.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2">
                <IconCoinBitcoin strokeWidth={1.5} className="mt-1" />
                <div>
                  <p className="text-lg font-bold">Get Paid</p>
                  <span className="text-muted-foreground">
                    Receive secure payments for your completed work.
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
