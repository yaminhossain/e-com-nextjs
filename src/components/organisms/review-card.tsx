
import StarRating from "../molecules/star-rating";
import Heading from "../atoms/heading";

// interface IReviewCardProps{
//   next: true,

// }


function ReviewCard() {
  return (
    <div className="border border-gray-200 w-full max-w-[400] h-[240] rounded-[20] px-[32] py-[28] flex flex-col gap-4 bg-white shrink-0">
      <StarRating rating={5} />
      <Heading variant="heading-sm">Sarah M.</Heading>
      <div>
        <q className="text-gray-500">
          I&apos;m blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece
          I&apos;ve bought has exceeded my expectations.
        </q>
      </div>
    </div>
  );
}

export default ReviewCard;
