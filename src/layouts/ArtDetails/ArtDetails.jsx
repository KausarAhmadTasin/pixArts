import { FaCheck, FaRegStar, FaStar, FaTimes } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ArtDetails = () => {
  const art = useLoaderData();

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating); // Round rating to nearest integer
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };
  return (
    <div className="flex  text-gray-700 container mx-auto gap-x-8 my-10">
      <div className="w-full">
        <img className="rounded-xl " src={art.photo} alt="" />
      </div>
      <div className="flex  flex-col my-2">
        <h2 className="text-[#3749bb] text-2xl md:ml-2">{art.itemName}</h2>
        <div className="flex gap-2 my-3">
          <p className="bg-[#F5F6FC] flex items-center font-normal  rounded-full py-1 px-3">
            Price: <span className="ml-1 font-semibold">{art.price}৳</span>
          </p>
          <p className="bg-[#F5F6FC] flex items-center font-semibold rounded-full py-1 px-3">
            <span className="font-normal mr-1">Status: </span>
            {art.stockStatus === "inStock"
              ? "In Stock"
              : art.stockStatus === "madeToOrder"
              ? "Made to Order"
              : art.stockStatus === "outOfStock"
              ? "Out of Stock"
              : null}
          </p>
          <p className="bg-[#F5F6FC] font-semibold flex items-center rounded-full py-1 px-3">
            <span className="font-normal mr-1">Process Time: </span>
            {art.proccessTime}
          </p>
        </div>

        <div className="overflow-x-auto flex-grow mt-3">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Category</th>
                <td>{art.selectedSubCategory.label}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>Artist</th>
                <td>{art.userName}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>Contact</th>
                <td>{art.userEmail}</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>Customizable</th>
                <td className="flex items-center">
                  {art.customizable === "yes" ? (
                    <>
                      Yes <FaCheck className="text-green-500 ml-2" />
                    </>
                  ) : (
                    <>
                      No <FaTimes className="text-red-500 ml-2" />
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          {/* Rating */}
          <p className="font-bold md:ml-4 flex mt-5 items-center">
            <span className="mr-2"> Ratings:</span>
            <span className="text-xl flex">{renderStars(art.rating)} </span>
          </p>
        </div>
        <p className="md:ml-3 my-3 font-medium">{art.description}</p>
        <button className="btn bg-[#3749bb] md:ml-3 text-white hover:text-[#3749bb] rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ArtDetails;
