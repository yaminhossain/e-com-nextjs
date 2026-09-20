import { ReactElement } from "react";

interface IPropsType {
  width: string;
  height: string;

  viewBoxX?: string;
  viewBoxY?: string;

  viewBoxWidth: string;
  viewBoxHeight: string;
  defaultFill?: string;
  className?: string;
  children: ReactElement<React.SVGProps<SVGPathElement>>;
}

function SVG({
  width,
  height,
  viewBoxX = "0",
  viewBoxY = "0",
  viewBoxHeight,
  viewBoxWidth,
  defaultFill = "none",
  className,
  children,
}: IPropsType) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
      fill={defaultFill} // default: A child element can override it
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  );
}

export default SVG;
