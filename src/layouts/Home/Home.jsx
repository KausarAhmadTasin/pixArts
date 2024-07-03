import { Link } from "react-router-dom";
import ArtItems from "../../components/ArtItems/ArtItems";
import Category from "../../components/Category/Category";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
  return (
    <div className="pb-24">
      <HomeSlider />
      {/* Category Section */}
      <div className=" container mt-32 my-20 mx-auto">
        <h1 className="text-4xl font-bold text-[#333333] text-center my-6">
          Art Categories
        </h1>
        <p className="text-center text-gray-600 w-1/2 mx-auto mb-12">
          Explore our collection of beautiful art pieces. Each item is crafted
          with care and passion. Browse through our gallery to find the perfect
          piece to add to your collection.
        </p>
        <div className="flex justify-center gap-x-3">
          <Link to="/categoryItems/landscapePainting">
            <Category category={"Landscape Painting"} />
          </Link>
          <Link to="/categoryItems/portraitDrawing">
            <Category category={"Portrait Drawing"} />
          </Link>
          <Link to="/categoryItems/watercolourPainting">
            <Category category={"Watercolour Painting"} />
          </Link>
          <Link to="/categoryItems/oilPainting">
            <Category category={"Oil Painting"} />
          </Link>
          <Link to="/categoryItems/charcoalSketching">
            <Category category={"Charcoal Sketching"} />
          </Link>
          <Link to="/categoryItems/cartoonDrawing">
            <Category category={"Cartoon Drawing"} />
          </Link>
        </div>
      </div>
      {/* Art Items Section */}
      <div className="mb-8">
        <ArtItems />
      </div>
    </div>
  );
};

export default Home;
