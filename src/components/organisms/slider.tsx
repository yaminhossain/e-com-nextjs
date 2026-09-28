"use client";

import { cn } from "@/utils/helper";
import { useEffect, useRef, useState } from "react";

interface SliderViewPortProps {
  className: string;
  gap: string;
}

function Slider({ className, gap }: SliderViewPortProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // states
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [trackWidth, setTrackWidth] = useState<number>(0);
  const [calculatedGap, setCalculatedGap] = useState<number>(0);
  // const [movementDirection, setMovementDirection] = useState<string>("");
  const [movementAmount, setMovementAmount] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(0);

  console.log("Sliding Details:", {
    viewportWidth,
    trackWidth,
    gap,
    movementAmount,
    cardWidth,
  });

  // Sliding Handler Button
  const slidingHandler = (move: string): void => {
    const lowerLimit = Math.abs(trackWidth - viewportWidth);
    console.log("lower limit:", lowerLimit);
    // setMovementDirection(move);
    if (move === "next") {
      if (movementAmount < lowerLimit) {
        setMovementAmount(
          (prevAmount) => prevAmount + (cardWidth + calculatedGap),
        );
      } else {
        setMovementAmount(0);
      }
    }
    if (move === "prev" && movementAmount > 0) {
      setMovementAmount(
        (prevAmount) => prevAmount - (cardWidth + calculatedGap),
      );
    }
  };

  // useEffect

  useEffect(() => {
    if (!viewportRef.current || !trackRef.current || !cardRef.current) return;

    const viewportWidth = viewportRef.current.clientWidth;
    setViewportWidth(viewportWidth);

    const trackWidth = trackRef.current.clientWidth;
    const styles = window.getComputedStyle(trackRef.current);
    const gap = parseFloat(styles.columnGap);
    setTrackWidth(trackWidth);
    setCalculatedGap(gap);

    const cardWidth = cardRef.current.clientWidth;
    setCardWidth(cardWidth);
  }, []);

  return (
    <>
      {/* View Port */}
      <div ref={viewportRef} className={cn("overflow-hidden", className)}>
        {/* Slider Track */}
        <div
          // style={
          //   movementDirection
          //     ? { transform: `translateX(-${movementAmount}px)` }
          //     : undefined
          // }
          style={{
            transform: `translateX(-${movementAmount}px)`,
          }}
          ref={trackRef}
          className={`h-full w-fit flex flex-nowrap gap-${gap}`}
        >
          {/* Sliding Cards */}
          <SliderCard cardRef={cardRef}>
            <div>Hi my name is Yamin</div>
          </SliderCard>
        </div>
      </div>

      {/* Button */}
      <div>
        <button
          className="rounded-full border cursor-pointer p-4"
          onClick={() => slidingHandler("prev")}
        >
          Prev
        </button>
        <button
          className="rounded-full border cursor-pointer p-4"
          onClick={() => slidingHandler("next")}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Slider;

interface SliderCardProps {
  cardRef?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
  className?: string;
}

// This is for later
export function SliderCard({ cardRef, children, className }: SliderCardProps) {
  return (
    <div
      ref={cardRef}
      className={cn(
        `bg-indigo-700 h-full w-xl shrink-0 flex justify-center items-center text-7xl text-white`,
        className,
      )}
    >
      {children}
    </div>
  );
}

/* 
TODO: Emergency Fix: Need to figure out, how to pass the ref to the SliderCard component
The concept is like the followings:
<Slider>

  <SliderCard>
    <div></div>
  </SliderCard>
  <SliderCard>
    <div></div>
  </SliderCard>
  <SliderCard>
    <div></div>
  </SliderCard>
</Slider>
*/
