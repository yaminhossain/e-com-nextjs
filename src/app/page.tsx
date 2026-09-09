import Button from "@/components/atoms/Button";
import { cn } from "@/utils/helper";

export default function Home() {
  console.log(cn("Ok"))

  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
}
