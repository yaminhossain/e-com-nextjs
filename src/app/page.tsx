"use client";

import { useEffect, useRef, useState } from "react";

const tailwindColors = [
  "bg-amber-500",
  "bg-emerald-600",
  "bg-indigo-400",
  "bg-rose-700",
  "bg-sky-300",
  "bg-violet-800",
  "bg-lime-500",
  "bg-fuchsia-600",
  "bg-cyan-400",
  "bg-orange-500",
  "bg-teal-700",
  "bg-slate-500",
];

function Home() {
  // static values
  const gap = 12;
  const numberOfCards = 3;

  // states
  const [windowSize, setWindowSize] = useState<number>(0);
  const [cardSize, setCardSize] = useState<number>(0);
  const [movement, setMovement] = useState("");
  const [totalMovement, setTotalMovement] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // refs
  const containerRef = useRef<HTMLDivElement>(null);

  console.log("Total Movement: ", totalMovement);
  // Next and Prev State Handler
  const movementHandler = (move: string): void => {
    const lowerLimit = Math.abs(containerWidth - windowSize);
    setMovement(move);
    if (move === "next") {
      if (totalMovement < lowerLimit) {
        setTotalMovement((prevMovement) => prevMovement + (cardSize + gap));
      } else {
        setTotalMovement(0);
      }
    }
    if (move === "prev" && totalMovement > 0) {
      setTotalMovement((prevMovement) => prevMovement - (cardSize + gap));
    }
  };

  useEffect(() => {
    const windowSize = window.innerWidth;
    Promise.resolve().then(() => setWindowSize(windowSize));
    const cardSize = (windowSize - gap * (numberOfCards - 1)) / numberOfCards;
    Promise.resolve().then(() => setCardSize(cardSize));

    if (containerRef.current) {
      const rect = containerRef.current!.getBoundingClientRect();
      setContainerWidth(rect.width);
    }
  }, [cardSize]);

  return (
    <div>
      {/* Card Section */}
      <div className="overflow-hidden">
        <div
          style={
            movement
              ? { transform: `translateX(-${totalMovement}px)` }
              : undefined
          }
          className={`h-90 bg-red-300 flex gap-3 flex-nowrap w-fit transition-all duration-100 ease-in-out`}
          ref={containerRef}
        >
          {tailwindColors.map((color, index) => (
            <div
              key={index}
              style={{ width: cardSize }}
              // const cardSize = (windowSize - gap * (numberOfCards - 1)) / numberOfCards;
              // style={{
              //   width: `calc(100% - ${(gap * (numberOfCards - 1)) / numberOfCards}px)`,
              // }}
              className={`h-full ${color} shrink-0 flex justify-center items-center text-7xl text-white`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Button Section */}
      <div>
        <button
          className="rounded-full border cursor-pointer p-4"
          onClick={() => movementHandler("prev")}
        >
          Prev
        </button>
        <button
          className="rounded-full border cursor-pointer p-4"
          onClick={() => movementHandler("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
