import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {
  const [textPassword, setTextPassword] = useState(false);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse gap-x-8">
          <div className="text-center md:text-left md:w-1/3">
            <h1 className="text-5xl py-2 font-bold text-[#3771FE] gradient-text">
              Register Now!
            </h1>
            <p className="py-6 text-gray-500 font-normal ">
              Explore art pictures as a journey through the myriad expressions
              of human creativity and emotion. Each artwork tells a unique
              story, capturing moments in time, cultural nuances, and personal
              insights.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Abdul Karim"
                  className="input input-bordered"
                  required
                  autoFocus
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Ex: abdul.karim@gamil.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: photo.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={textPassword ? "" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div
                    onClick={() => setTextPassword(!textPassword)}
                    className="absolute top-1/3 right-2 text-gray-500"
                  >
                    {textPassword ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>
                <label className="label label-text-alt justify-start">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className=" link link-hover decoration-blue-600"
                  >
                    <span className="text-blue-600 ml-1">Login</span>
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#7eaf3e] hover:text-[#7eaf3e] text-white text-lg">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
