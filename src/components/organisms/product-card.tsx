import Badge from "../atoms/badge";
import Heading from "../atoms/heading";
import ProductImage from "../atoms/product-image";
import StarRating from "../molecules/star-rating";

function ProductCard() {
  return (
    <div>
      <ProductImage src="/images/dummy-product-image.png" />
      <Heading variant="heading-md" className="mt-4">
        {"Vertical Striped Shirt"}
      </Heading>
      {/* Rating Section */}
      <div className="flex items-center gap-4  my-2">
        <StarRating rating={3.6} />
        <p className="text-sm">3.6/5</p>
      </div>
      {/* Price Section */}
      <div className="flex gap-2 items-center">
        <Heading variant="heading-sm">{`\$${240}`}</Heading>
        <Heading
          variant="heading-sm"
          className="line-through text-gray-400"
        >{`\$${260}`}</Heading>
        <Badge text="-20%" variant="warning" className="text-xs w-15 py-0.5" />
      </div>
    </div>
  );
}

export default ProductCard;
