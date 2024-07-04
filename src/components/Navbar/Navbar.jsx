import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { logOut, user, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Signed out!");
      })
      .catch(() => {
        toast.error("Sign out failed!");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium border-green-500 border-2 bg-gray-700 text-white"
              : "font-medium text-white hover:underline underline-offset-8 hover:decoration-sky-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium border-green-500 border-2 bg-gray-700 text-white"
              : "font-medium text-white hover:underline underline-offset-8 hover:decoration-sky-500"
          }
          to="/allArts"
        >
          All Arts
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium border-green-500 border-2 bg-gray-700 text-white"
              : "font-medium text-white hover:underline underline-offset-8 hover:decoration-sky-500"
          }
          to="/myArts"
        >
          My Arts
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium border-green-500 border-2 bg-gray-700 text-white"
              : "font-medium text-white hover:underline underline-offset-8 hover:decoration-sky-500"
          }
          to="/addArts"
        >
          Add Arts
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#333333] shadow-lg shadow-[#928e8e] fixed z-30 top-0">
        <div className="navbar-start">
          <div className="dropdown md:ml-0 -ml-3 text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-[#333]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#333] -ml-2 rounded-box z-[1] mt-2 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="btn md:ml-0 -ml-6 btn-ghost text-xl play-right-font gradient-text"
          >
            PixArts
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-spinner loading-sm mr-3 bg-blue-600"></span>
          ) : !user ? (
            <div className="flex gap-x-2">
              <Link
                to="/login"
                className="btn rounded-xl font-medium h-5 border-green-500 border-2 bg-[#333333] hover:bg-[#414040] text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn rounded-xl font-medium h-5 border-sky-500 border-2 bg-[#333333] hover:bg-[#414040] text-white"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex gap-x-2 items-center">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className="w-11 h-11 rounded-full z-20"
                src={user?.photoURL}
                alt="User Profile"
              />
              <button
                className="btn rounded-xl font-medium h-5 border-sky-500 border-2 bg-[#333333] hover:bg-[#414040] text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
              <Tooltip id="my-tooltip" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
