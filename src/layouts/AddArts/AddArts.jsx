import Select from "react-select";
import { useState } from "react";

const AddArts = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [rating, setRating] = useState(0);

  const [subCategories, setSubCategories] = useState([
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "blue", label: "Blue" },
    { value: "blue", label: "Blue" },
    { value: "blue", label: "Blue" },
  ]);

  const handleAddItem = (e) => {
    e.preventDefault();

    const form = e.target;
    const itemName = form.itemName.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const proccessTime = form.proccessTime.value;
    const ratings = rating;

    const item = {
      itemName,
      photo,
      price,
      proccessTime,
      ratings,
    };
    console.log(item);
  };
  return (
    <div className="w-2/3 mx-auto bg-[#F1F2F5] py-6 rounded-2xl my-8">
      <form onSubmit={handleAddItem}>
        {/* First Row */}
        <div className="flex justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  text-gray-500 font-semibold">
                Item Name<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Item Name"
              name="itemName"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  text-gray-500 font-semibold">
                Photo URL<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* Second Row */}
        <div className="flex justify-center gap-x-6  my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Price<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="number"
              min="1"
              name="price"
              placeholder="1"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Proccessing Time<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Ex: 3 days"
              name="proccessTime"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* Third Row */}
        <div className="flex justify-center gap-x-6  my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Rating<span className="text-red-600">*</span>
              </span>
            </div>
            {/* Rating */}
            <div className="rating mt-3 space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    className="mask mask-star-2 bg-orange-400"
                    checked={rating === value}
                    onChange={() => setRating(value)}
                  />
                </label>
              ))}
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Customizable<span className="text-red-600">*</span>
              </span>
            </div>
            <div className="form-control w-1/2">
              <label className="label cursor-pointer">
                <span className="label-text">Yes</span>
                <input
                  type="radio"
                  name="availabe"
                  className="radio checked:bg-green-500"
                  defaultChecked
                  value="yes"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input
                  type="radio"
                  name="availabe"
                  value="no"
                  className="radio checked:bg-red-500"
                />
              </label>
            </div>
          </label>
        </div>

        {/* Fourth Row */}
        <div className="flex items-center justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                User Name<span className="text-red-600">*</span>
              </span>
            </div>
            <Select
              className="input-bordered w-full h- max-w-xs"
              classNamePrefix="select"
              defaultValue={subCategories[0]}
              isClearable={isClearable}
              name="subCategories"
              options={subCategories}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                User Email<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Ex: karim@gmail.com"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        {/* Last Row */}
        <div className="flex  justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Stock Status<span>*</span>
              </span>
            </div>
            {/* Stock Status */}
            <div className="form-control w-2/3">
              <label className="label cursor-pointer">
                <span className="label-text">In Stock</span>
                <input
                  type="radio"
                  name="stockStatus"
                  value="inStock"
                  className="radio checked:bg-green-500"
                  defaultChecked
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Made to Order</span>
                <input
                  type="radio"
                  name="stockStatus"
                  value="madeToOrder"
                  className="radio checked:bg-blue-500"
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Out of Stock</span>
                <input
                  type="radio"
                  name="stockStatus"
                  value="outOfStock"
                  className="radio checked:bg-red-600"
                />
              </label>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Item Description<span className="text-red-600">*</span>
              </span>
            </div>
            <textarea
              placeholder="Description"
              className="textarea w-full h-full mx-auto flex items-center justify-center textarea-bordered textarea-sm"
            ></textarea>
          </label>
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn bg-green-400 text-white mt-8 hover:text-gray-600 w-4/5 mx-auto flex"
        />
      </form>
    </div>
  );
};

export default AddArts;
