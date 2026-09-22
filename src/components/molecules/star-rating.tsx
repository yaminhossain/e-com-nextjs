import SVG from "../atoms/svg";

interface IStarRating {
  rating: number | string;
}

function StarRating({ rating }: IStarRating) {
  const fullStars = Math.floor(Number(rating));
  const halfStar = Number(rating) - fullStars;
  console.log(`Full Starts ${fullStars}, Half Star ${halfStar}`);

  return (
    <div className="relative flex gap-3">
      {/* Unrated Stars */}
      {new Array(5).fill(null).map((element, index) => (
        <UnratedStar key={index} />
      ))}
      {/* Rated Stars */}
      <div className="absolute inset-0 flex gap-3">
        {fullStars > 0 &&
          new Array(fullStars)
            .fill(null)
            .map((element, index) => <Star key={index} />)}
        {halfStar >= 0.5 && <Star isHalf={true} />}
      </div>
    </div>
  );
}

export default StarRating;

interface IStarProps {
  isHalf?: boolean;
}

function Star({ isHalf }: IStarProps) {
  return (
    <SVG
      width={isHalf ? "11" : "22"}
      height="21"
      viewBoxX="0"
      viewBoxY="0"
      viewBoxWidth={isHalf ? "11" : "22"}
      viewBoxHeight="21"
    >
      <path
        d="M10.7369 0L13.9354 6.8872L21.4739 7.80085L15.9121 12.971L17.3727 20.4229L10.7369 16.731L4.10114 20.4229L5.56173 12.971L-3.8147e-06 7.80085L7.53849 6.8872L10.7369 0Z"
        fill="#FFC633"
      />
    </SVG>
  );
}

function UnratedStar() {
  return (
    <SVG
      width="22"
      height="21"
      viewBoxX="0"
      viewBoxY="0"
      viewBoxWidth="22"
      viewBoxHeight="21"
    >
      <path
        d="M10.7369 0L13.9354 6.8872L21.4739 7.80085L15.9121 12.971L17.3727 20.4229L10.7369 16.731L4.10114 20.4229L5.56173 12.971L-3.8147e-06 7.80085L7.53849 6.8872L10.7369 0Z"
        className="fill-gray-200"
      />
    </SVG>
  );
}
