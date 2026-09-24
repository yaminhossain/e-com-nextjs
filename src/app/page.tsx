"use client";

import { useEffect, useState } from "react";

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
  const gap = 12;
  const [cardSize, setCardSize] = useState<number>(0);
  const [movement, setMovement] = useState("");

  useEffect(() => {
    const windowSize = window.innerWidth;
    const numberOfCards = 3;
    const cardSize = (windowSize - gap * (numberOfCards - 1)) / numberOfCards;
    Promise.resolve().then(() => setCardSize(cardSize));
  }, []);

  return (
    <div>
      {/* Card Section */}
      <div className="overflow-hidden">
        <div
          style={
            movement === "next"
              ? { transform: `translateX(-${cardSize + gap}px)` }
              : movement === "prev"
                ? { transform: `translateX(${cardSize + gap}px)` }
                : undefined
          }
          className="h-90 bg-red-300 flex gap-3 flex-nowrap w-fit "
        >
          {tailwindColors.map((color, index) => (
            <div
              key={index}
              style={{ width: cardSize }}
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
          onClick={() => setMovement("prev")}
        >
          Prev
        </button>
        <button
          className="rounded-full border cursor-pointer p-4"
          onClick={() => setMovement("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
