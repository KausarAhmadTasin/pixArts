import ArtItems from "../../components/ArtItems/ArtItems";
import Category from "../../components/Category/Category";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
  return (
    <>
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
          <Category category={"Landscape Painting"} />
          <Category category={"Portrait Drawing"} />
          <Category category={"Watercolour Painting"} />
          <Category category={"Oil Painting"} />
          <Category category={"Charcoal Sketching"} />
          <Category category={"Cartoon Drawing"} />
        </div>
      </div>
      {/* Art Items Section */}
      <div className="grid">
        <ArtItems />
      </div>
    </>
  );
};

export default Home;
