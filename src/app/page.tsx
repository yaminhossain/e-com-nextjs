import StarRating from "@/components/molecules/star-rating";
import ProductCard from "@/components/organisms/product-card";
import Slider from "@/components/organisms/slider";

function Home() {
  return (
    <div>
      <p className="text-5xl text-center my-4">SLIDER V3</p>
      <Slider className="max-w-6xl mx-auto h-90 w-full" />
    </div>
  );
}

export default Home;
