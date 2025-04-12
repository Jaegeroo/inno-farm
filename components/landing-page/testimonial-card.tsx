import { Card } from "../ui/card";
import Image from "next/image";

export default function TestimonialCard({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) {
  return (
    <Card className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4">
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt="avatar"
          src={img}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium dark:text-white">{name}</span>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <p className="text-sm">{body}</p>
    </Card>
  );
}
