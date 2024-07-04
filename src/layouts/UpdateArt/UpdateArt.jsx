import Select from "react-select";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import { useLocation } from "react-router-dom";
import swal from "sweetalert2";

const UpdateArt = () => {
  // eslint-disable-next-line no-unused-vars
  const [isClearable, setIsClearable] = useState(true);
  const [customizable, setCustomizable] = useState("yes");
  const [stockStatus, setStockStatus] = useState("inStock");
  const [rating, setRating] = useState(1);
  const location = useLocation();
  const { art } = location.state;

  console.log(art);

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

  const { user } = useContext(AuthContext);

  const handleUpdateItem = (e) => {
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

    swal
      .fire({
        title: "Are you sure?",
        text: "Once updated, you will not be able to reverse it!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#17a2b8",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, edit it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://pix-arts-server.vercel.app/myArts/${user.email}/${art._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(item),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                swal.fire("Edited!", "Your art has been edited.", "success");
              }
              form.reset();
            });
        } else {
          swal.fire("Failed to edit!", "error");
        }
      });
  };

  return (
    <div className="lg:w-2/3 lg:mx-auto mx-3 mt-28 bg-[#ebdcd177] py-6 rounded-2xl my-8">
      <h1 className="text-3xl font-bold text-[#333333] text-center mb-6">
        Update Art
      </h1>
      <form onSubmit={handleUpdateItem}>
        {/* First Row */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-x-6 my-4">
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
              required
              defaultValue={art.itemName}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control  mt-3 md:mt-0 w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Photo URL<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Photo URL"
              required
              defaultValue={art.photo}
              name="photo"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* Second Row */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Price<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="number"
              min="1"
              defaultValue={art.price}
              name="price"
              required
              placeholder="1"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control  mt-3 md:mt-0 w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Processing Time<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              defaultValue={art.proccessTime}
              placeholder="Ex: 3 days"
              required
              name="proccessTime"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* Third Row */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-x-6 my-4">
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
          <label className="form-control mt-3 md:mt-0 w-full max-w-xs">
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
        <div className="flex md:flex-row flex-col items-center justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                User Name<span className="text-red-600">*</span>
              </span>
            </div>
            <input
              type="text"
              readOnly
              name="userName"
              value={user.displayName}
              placeholder="User Name"
              className="input input-bordered w-full max-w-xs"
            />
            <p className="text-red-600 text-sm pt-1 ml-1">
              You cannot change name*
            </p>
          </label>
          <label className="form-control mt-3 md:mt-0 w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                User Email<span className="text-red-600 ">*</span>
              </span>
            </div>
            <input
              type="email"
              readOnly
              placeholder="Ex: 3 days"
              name="userEmail"
              value={user.email}
              className="input input-bordered w-full max-w-xs"
            />
            <p className="text-red-600 text-sm pt-1 ml-1">
              You cannot change email*
            </p>
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
        <div className="flex md:flex-row flex-col items-center justify-center gap-x-6 my-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Stock Status<span className="text-red-600">*</span>
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
          <label className="form-control mt-3 md:mt-0 w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-500 font-semibold">
                Item Description<span className="text-red-600">*</span>
              </span>
            </div>
            <textarea
              placeholder="Description"
              name="description"
              required
              defaultValue={art.description}
              className="textarea w-full h-full mx-auto flex items-center justify-center textarea-bordered textarea-sm"
            ></textarea>
          </label>
        </div>
        <input
          type="submit"
          value="Update"
          className="btn bg-green-400 text-white mt-8 hover:text-gray-600 w-4/5 mx-auto flex"
        />
      </form>
    </div>
  );
};

export default UpdateArt;
