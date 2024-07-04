import { useContext, useEffect, useState } from "react";
import { FaStar, FaRegStar, FaArrowRight, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import swal from "sweetalert2";

const MyArts = () => {
  const [arts, setArts] = useState([]);
  const [filter, setFilter] = useState("all");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://pix-arts-server.vercel.app/myArts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
      });
  }, [user.email]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredArts = arts.filter((art) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "customizable") {
      return art.customizable === "yes";
    }
    if (filter === "notCustomizable") {
      return art.customizable !== "yes";
    }
    return true;
  });

  const handleDelete = (artId) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this art!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://pix-arts-server.vercel.app/myArts/${user.email}/${artId}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                setArts(arts.filter((art) => art._id !== artId));
                swal.fire("Deleted!", "Your art has been deleted.", "success");
              }
            });
        }
      });
  };

  return (
    <div className="container rounded-2xl mb-10 mt-24 bg-[#F8F8F8] p-6 mx-auto">
      <Tooltip id="my-tooltip" />
      {arts.length === 0 ? (
        <div className="flex min-h-screen flex-col items-center justify-center h-64">
          <p className="text-2xl text-gray-500">
            You haven&apos;t added any art yet.
          </p>
          <Link to="/addArts">
            <button className="btn my-5 border bg-[#333333] text-white font-normal hover:text-[#333] border-sky-700 ">
              Add Arts
            </button>
          </Link>
        </div>
      ) : (
        <>
          {" "}
          <h1 className="text-4xl font-bold text-[#333333] text-center mb-6">
            My Art Items
          </h1>
          <p className="text-center text-gray-600 lg:w-1/2 mx-auto mb-12">
            Explore our collection of beautiful art pieces. Each item is crafted
            with care and passion. Browse through our gallery to find the
            perfect piece to add to your collection.
          </p>
          <div className="text-center mb-12">
            <label className="mr-4 font-semibold">
              Filter by Customization:
            </label>
            <select
              onChange={handleFilterChange}
              value={filter}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="all">All</option>
              <option value="customizable">Customizable</option>
              <option value="notCustomizable">Not Customizable</option>
            </select>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 grid-cols-1">
            {filteredArts.map((art) => (
              <li key={art._id}>
                <div className="card card-compact relative bg-base-100 lg:w-96 shadow-xl">
                  <span
                    className={`absolute -right-2 h-7 border-none text-white font-normal -top-2 badge ${
                      art.stockStatus === "inStock"
                        ? "bg-green-500"
                        : art.stockStatus === "madeToOrder"
                        ? "bg-yellow-500"
                        : art.stockStatus === "outOfStock"
                        ? "bg-orange-600"
                        : "badge-secondary"
                    }`}
                  >
                    {art.stockStatus === "inStock"
                      ? "In Stock"
                      : art.stockStatus === "madeToOrder"
                      ? "Made to Order"
                      : art.stockStatus === "outOfStock"
                      ? "Out of Stock"
                      : null}
                  </span>
                  <figure>
                    <img
                      className="w-full h-64 rounded-t-xl"
                      src={art.photo}
                      alt="Art"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-center mx-auto my-2 text-[#3749bb]">
                      {art.itemName}
                    </h2>
                    <div className="flex items-center">
                      <p>
                        <span className="font-bold mr-1">Category:</span>{" "}
                        {art.selectedSubCategory?.label}
                      </p>
                      <p className="text-end">
                        <span className="font-bold mr-1">Price:</span>{" "}
                        {art.price}
                        <span className="">৳</span>
                      </p>
                    </div>
                    <p className="font-bold flex items-center">
                      <span className="mr-2"> Ratings:</span>
                      <span className="text-xl flex">
                        {renderStars(art.rating)}{" "}
                      </span>
                    </p>
                    <div className="card-actions flex items-center justify-between mt-3">
                      <div className="space-x-3">
                        <button
                          className=" text-red-600 border-gray-700 text-xl px-3 py-0"
                          onClick={() => handleDelete(art._id)}
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Delete"
                        >
                          <MdDelete />
                        </button>
                        <Link to="/updateArt" state={{ art: art }}>
                          <button
                            className=" text-indigo-500 border-gray-700 text-xl px-3 py-0"
                            // onClick={handleEdit}
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Update"
                          >
                            <FaEdit />
                          </button>
                        </Link>
                      </div>
                      <Link to={`/myArtDetails/${art._id}`}>
                        {" "}
                        <button className="btn rounded-full bg-yellow-500 text-amber-800">
                          Details
                          <FaArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MyArts;
