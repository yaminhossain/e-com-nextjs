"use client";

import Button from "@/components/atoms/button";

export default function Home() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement></HTMLButtonElement>) => {
    console.log(e)
  };

  return (
    <div>
      <Button variant="primary" onClick={handleClick}>
        Hello
      </Button>
    </div>
  );
}
