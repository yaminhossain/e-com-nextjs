import { cn } from "@/utils/helper";

interface IHeadingProps {
  variant?:
    | "subheading-sm"
    | "banner-heading"
    | "heading"
    | "heading-sm"
    | "heading-xsm"
    | "heading-md"
    | "heading-md-white";

  children: string;
  className?: string;
}

function Heading({ variant, children, className = "" }: IHeadingProps) {
  let headingClass = "";

  switch (variant) {
    case "subheading-sm":
      headingClass = "text-base text-gray-500";
      break;

    case "banner-heading":
      headingClass = "text-[64px] font-bold";
      break;

    case "heading-xsm":
      headingClass = "text-xl font bold";
      break;

    case "heading-sm":
      headingClass = "text-[36] font-bold";
      break;

    case "heading-md":
      headingClass = "text-[40] font-bold";
      break;

    case "heading-md-white":
      headingClass = "text-[40] font-bold font-white";
      break;

    case "heading":
      headingClass = "text-5xl font-bold";
      break;

    default:
      headingClass = "text-base";
  }

  return <h1 className={cn(headingClass, className)}>{children}</h1>;
}

export default Heading;
