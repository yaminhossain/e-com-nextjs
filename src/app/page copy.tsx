"use client";

import Button from "@/components/atoms/button";
import ReviewCard from "@/components/organisms/review-card";
import { cn } from "@/utils/helper";
import { useState } from "react";

export default function Home() {
  const [isPrev, setIsPrev] = useState<boolean>(false);
  const [isNext, setIsNext] = useState<boolean>(false);

  const goPrev = () => {
    setIsPrev(!isPrev);
  };
  const goNext = () => {
    setIsNext(!isNext);
  };

  return (
    <div
      className={cn(
        "w-full h-screen flex flex-col items-center justify-center",
      )}
    >
      <div className="flex gap-1.5">
        <Button variant="secondary" onClick={goPrev}>
          Prev
        </Button>
        <Button variant="secondary" onClick={goNext}>
          Next
        </Button>
      </div>
      <div
        className={cn(
          "flex gap-5 overflow-x-scroll overflow-y-hidden ",
          isNext && "-translate-x-100",
        )}
      >
        <ReviewCard />
      </div>
    </div>
  );
}
