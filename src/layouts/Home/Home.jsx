import { Link } from "react-router-dom";
import ArtItems from "../../components/ArtItems/ArtItems";
import Category from "../../components/Category/Category";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
  return (
    <div className="pb-24">
      <HomeSlider />
      {/* Category Section */}
      <div className=" md:container mt-32 my-20 md:mx-auto">
        <h1 className="md:text-4xl text-3xl font-bold text-[#333333] text-center my-6">
          Art Categories
        </h1>
        <p className="text-center text-gray-600 md:w-1/2 mx-4 md:mx-auto mb-12">
          Explore our collection of beautiful art pieces. Each item is crafted
          with care and passion. Browse through our gallery to find the perfect
          piece to add to your collection.
        </p>
        <div className="md:grid justify-center  items-center lg:flex  md:grid-cols-3 grid-cols-1 text-center gap-y-4 mx-3 gap-x-1 md:gap-x-3">
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
      <div className="md:mb-8">
        <ArtItems />
      </div>
    </div>
  );
};

export default Home;
