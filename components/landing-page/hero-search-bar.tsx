"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { IconSwitchVertical } from "@tabler/icons-react";

export default function HeroSearchBar() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [value, setValue] = useState<string>("");
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);
  const [category, setCategory] = useState<"Freelancer" | "Client">(
    "Freelancer"
  );

  const placeholders = [
    "Frontend developer",
    "Backend developer",
    "Solidity developer",
    "Fullstack developer",
    "Social Media Manager",
    "Marketer",
  ];

  useEffect(() => {
    if (value || !isInView) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [placeholders.length, value, isInView]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Search: ", formData.get("search"));
    setValue("");
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="border rounded-md flex items-center max-w-lg bg-input dark:bg-input"
    >
      <motion.div
        layout
        whileInView={{ opacity: 1 }}
        className="flex items-center gap-2 cursor-pointer hover:text-primary px-4 bg-muted h-14  border-r"
        onClick={() =>
          setCategory((prev) =>
            prev === "Freelancer" ? "Client" : "Freelancer"
          )
        }
      >
        {category} <IconSwitchVertical className="size-4" />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          layout
          whileInView={{ opacity: 1 }}
          className="w-full"
          key={placeholderIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Input
            name="query"
            autoFocus
            value={value}
            placeholder={placeholders[placeholderIndex]}
            onChange={(e) => setValue(e.target.value)}
            className="placeholder:text-muted-foreground/50 border-0 focus:border-0 focus-visible:ring-0 rounded-none py-7 !text-lg"
          />
        </motion.div>
      </AnimatePresence>
      <div className="h-14 flex items-center dark:bg-input">
        <Button
          disabled={!value}
          size="icon"
          type="submit"
          className="flex items-center justify-center mx-2"
        >
          <IconChevronRight />
        </Button>
      </div>
    </form>
  );
}
