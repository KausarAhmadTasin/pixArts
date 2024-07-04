import PropTypes from "prop-types";

const Category = ({ category }) => {
  return (
    <div className="bg-[#F3DFD0] md:py-20 text-[#966e50] text-base md:text-lg rounded-xl hover:-translate-y-1.5 duration-200 hover:cursor-pointer font-medium px-2 my-4 py-2 md:px-6 shadow-lg shadow-[#F3DFD0] hover:shadow-xl hover:shadow-[#e2cebe]">
      <h2>{category}</h2>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.string,
};

export default Category;
