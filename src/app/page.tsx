"use client";

import Button from "@/components/atoms/button";

export default function Home() {
  const handleEvent = () => {
    console.log("Button Click");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleEvent}>
        Hello
      </Button>
    </div>
  );
}
