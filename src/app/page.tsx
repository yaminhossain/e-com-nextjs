import StarRating from "@/components/molecules/star-rating";

export default function Home() {
  return (
    <div >
      {/* Star Rating */}
      <p className="text-white my-3">Star Rating</p>
      <StarRating rating={4.5} />
    </div>
  );
}
