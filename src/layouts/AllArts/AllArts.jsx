import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const AllArts = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/arts")
      .then((res) => res.json())
      .then((data) => {
        setArts(data);
      });
  }, []);

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
    <div className="container mx-auto">
      <h1>All Arts</h1>
      <ul className="grid md:grid-cols-3 gap-6 grid-cols-1">
        {arts.map((art) => (
          <li key={art._id}>
            <div className="card card-compact relative bg-base-100 w-96 shadow-xl">
              <span
                className={`absolute -right-2 h-7 border-none text-white font-semibold -top-2 badge ${
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
                <h2 className="card-title">{art.itemName}</h2>
                <div className="flex items-center">
                  <p>
                    <span className="font-bold mr-1">Category:</span>{" "}
                    {art.selectedSubCategory?.label}
                  </p>
                  <p className="text-end">
                    <span className="font-bold mr-1">Price:</span> {art.price}
                    <span className="text-xl font-bold">৳</span>
                  </p>
                </div>
                <p className="font-bold flex items-center">
                  <span className="mr-2"> Ratings:</span>
                  {renderStars(art.rating)}{" "}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllArts;
