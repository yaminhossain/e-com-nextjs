import StarRating from "@/components/atoms/star-rating";
import SVG from "@/components/atoms/svg";

export default function Home() {
  return (
    <div className="h-28 bg-black">
      <StarRating />
      <SVG width="22" height="21" viewBoxWidth="22" viewBoxHeight="21">
        <path
          d="M10.7369 0L13.9354 6.8872L21.4739 7.80085L15.9121 12.971L17.3727 20.4229L10.7369 16.731L4.10114 20.4229L5.56173 12.971L-3.8147e-06 7.80085L7.53849 6.8872L10.7369 0Z"
          fill="#FFC633"
        />
      </SVG>
    </div>
  );
}
