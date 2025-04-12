import { TextAnimate } from "../ui/text-animate";
import { memo } from "react";
import Marquee from "../ui/marquee";
import TestimonialCard from "./testimonial-card";

function Testimonials() {
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="container mx-auto space-y-8 mt-20">
      <div className="space-y-2">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-center text-2xl md:text-3xl text-primary font-bold"
        >
          Hear What Our Users Are Saying
        </TextAnimate>
      </div>
      <div className="mt-5 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((item, index) => (
            <TestimonialCard {...item} key={index} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </Marquee>

        <Marquee pauseOnHover className="[--duration:20s]">
          {secondRow.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}

export default memo(Testimonials);
