import { Link } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse gap-x-12">
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
                <SocialLinks />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
