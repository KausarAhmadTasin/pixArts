import { useContext } from "react";
import { FaCheck, FaEdit, FaRegStar, FaStar, FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";

const MyArtDetails = () => {
  const art = useLoaderData();

  const { user } = useContext(AuthContext);

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

  const handleDelete = (artId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this art!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myArts/${user.email}/${artId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your art has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="flex pt-14 lg:flex-row flex-col text-gray-700 items-center md:mx-8 mx-3 lg:container lg:mx-auto gap-x-8 my-10">
      <div className="w-full">
        <img className="rounded-xl mx-auto" src={art.photo} alt="" />
      </div>
      <div className="flex flex-col my-2">
        <h2 className="text-[#3749bb] text-2xl lg:my-0 my-4 lg:text-start text-center md:ml-2">
          {art.itemName}
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1  gap-2 my-3">
          <p className="bg-[#F5F6FC] flex justify-center items-center font-normal  rounded-full py-1 px-3">
            Price: <span className="ml-1 font-semibold">{art.price}৳</span>
          </p>
          <p className="bg-[#F5F6FC] flex justify-center items-center font-semibold rounded-full py-1 px-3">
            <span className="font-normal mr-1">Status: </span>
            {art.stockStatus === "inStock"
              ? "In Stock"
              : art.stockStatus === "madeToOrder"
              ? "Made to Order"
              : art.stockStatus === "outOfStock"
              ? "Out of Stock"
              : null}
          </p>
          <p className="bg-[#F5F6FC] font-semibold justify-center flex items-center rounded-full py-1 px-3">
            <span className="font-normal mr-1">Process Time: </span>
            {art.proccessTime}
          </p>
        </div>

        <div
          className="space-x-3 my-2 flex
        "
        >
          <button
            className=" text-red-600 flex border items-center gap-x-3 rounded-lg border-red-600 text-xl px-3 py-0"
            onClick={() => handleDelete(art._id)}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Delete"
          >
            Delete: <MdDelete />
          </button>
          <Link to="/updateArt" state={{ art: art }}>
            <button
              className=" text-indigo-500 border flex items-center gap-x-3 border-indigo-500  rounded-lg text-xl px-3 py-0"
              // onClick={handleEdit}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Update"
            >
              Edit: <FaEdit />
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto text-gray-600 mt-3">
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
        <button className="btn mt-5 bg-[#3749bb] md:ml-3 text-white hover:text-[#3749bb] rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default MyArtDetails;
