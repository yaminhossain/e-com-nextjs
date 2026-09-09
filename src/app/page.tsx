"use client";

import Button from "@/components/atoms/Button";

export default function Home() {
  const handleEvent = () => {
    console.log("Button Click");
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleEvent}>
        Hello
      </Button>
    </div>
  );
}
