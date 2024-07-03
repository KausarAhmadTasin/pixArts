import { useContext, useEffect, useState } from "react";
import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";

const MyArts = () => {
  const [arts, setArts] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/myArts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
      });
  }, [user.email]);

  console.log(arts);

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
    <div className="container rounded-2xl mb-10 mt-24 bg-[#F8F8F8] p-6 mx-auto">
      {arts.length === 0 ? (
        <div className="flex min-h-screen flex-col items-center justify-center h-64">
          <p className="text-2xl text-gray-500">
            You haven&apos;t added any art.
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
            All Art Items
          </h1>
          <p className="text-center text-gray-600 w-1/2 mx-auto mb-12">
            Explore our collection of beautiful art pieces. Each item is crafted
            with care and passion. Browse through our gallery to find the
            perfect piece to add to your collection.
          </p>
          <ul className="grid md:grid-cols-3 gap-x-6 gap-y-10 grid-cols-1">
            {arts.map((art) => (
              <li key={art._id}>
                <div className="card card-compact relative bg-base-100 w-96 shadow-xl">
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
                    <div className="flex items-center justify-between">
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
                        {renderStars(art.rating)}
                      </span>
                    </p>
                    <div className="card-actions justify-end">
                      <Link to={`/artDetails/${art._id}`}>
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
