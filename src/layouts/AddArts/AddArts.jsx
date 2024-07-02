import Select from "react-select";
import { useState } from "react";
import { toast } from "react-toastify";

const AddArts = () => {
  // eslint-disable-next-line no-unused-vars
  const [isClearable, setIsClearable] = useState(true);
  const [customizable, setCustomizable] = useState("yes");
  const [stockStatus, setStockStatus] = useState("inStock");
  const [rating, setRating] = useState(1);

  const subCategories = [
    { value: "landscapePainting", label: "Landscape Painting" },
    { value: "portraitDrawing", label: "Portrait Drawing" },
    { value: "watercolourPainting", label: "Watercolour Painting" },
    { value: "oilPainting", label: "Oil Painting" },
    { value: "charcoalSketching", label: "Charcoal Sketching" },
    { value: "cartoonDrawing", label: "Cartoon Drawing" },
  ];
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    subCategories[0]
  );

  const handleCustomizableChange = (e) => {
    setCustomizable(e.target.value);
  };

  const handleStockStatusChange = (e) => {
    setStockStatus(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    const form = e.target;
    const itemName = form.itemName.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const proccessTime = form.proccessTime.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const description = form.description.value;

    const item = {
      itemName,
      photo,
      price,
      proccessTime,
      userName,
      userEmail,
      rating,
      description,
      stockStatus,
      customizable,
      selectedSubCategory,
    };

    fetch("http://localhost:5000/arts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Art item added!");
          form.reset();
        } else {
          toast.error("failed to add art item!");
        }
      });
  };

  return (
    <div className="w-2/3 mx-auto mt-28 bg-[#ebdcd177] py-6 rounded-2xl my-8">
      <form onSubmit={handleAddItem}>
        {/* First Row */}
        <div className="flex justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
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
              <span className="label-text text-gray-500 font-semibold">
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
        <div className="flex justify-center gap-x-6 my-4">
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
                Processing Time<span className="text-red-600">*</span>
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
        <div className="flex justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Rating<span className="text-red-600">*</span>
              </span>
            </div>
            <div className="rating mt-3 space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={value}
                  type="radio"
                  name="rating"
                  value={value}
                  className="mask mask-star-2 bg-orange-400"
                  checked={rating === value}
                  onChange={() => setRating(value)}
                />
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
                  name="customizable"
                  className="radio checked:bg-green-500"
                  value="yes"
                  checked={customizable === "yes"}
                  onChange={handleCustomizableChange}
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input
                  type="radio"
                  name="customizable"
                  className="radio checked:bg-red-500"
                  value="no"
                  checked={customizable === "no"}
                  onChange={handleCustomizableChange}
                />
              </label>
            </div>
          </label>
        </div>
        {/* Fourth Row */}
        <div className="flex justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                User Name<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                User Email<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="email"
              placeholder="Ex: 3 days"
              name="userEmail"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* Fifth Row */}
        <div className=" gap-x-6 w-2/3 mx-auto my-6">
          <label className="form-control">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Sub-Category<span className="text-red-600">*</span>
              </span>
            </div>
            <Select
              className="input-bordered w-full"
              classNamePrefix="select"
              defaultValue={subCategories[0]}
              isClearable={isClearable}
              name="subCategories"
              options={subCategories}
              onChange={(option) => setSelectedSubCategory(option)}
            />
          </label>
        </div>
        {/* Last Row */}
        <div className="flex justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Stock Status<span>*</span>
              </span>
            </div>
            <div className="form-control w-2/3">
              <label className="label cursor-pointer">
                <span className="label-text">In Stock</span>
                <input
                  type="radio"
                  name="stockStatus"
                  value="inStock"
                  className="radio checked:bg-green-500"
                  checked={stockStatus === "inStock"}
                  onChange={handleStockStatusChange}
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Made to Order</span>
                <input
                  type="radio"
                  name="stockStatus"
                  value="madeToOrder"
                  checked={stockStatus === "madeToOrder"}
                  onChange={handleStockStatusChange}
                  className="radio checked:bg-blue-500"
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Out of Stock</span>
                <input
                  type="radio"
                  name="stockStatus"
                  checked={stockStatus === "outOfStock"}
                  onChange={handleStockStatusChange}
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
              name="description"
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
