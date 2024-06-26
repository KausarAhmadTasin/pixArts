import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Signed out!");
        console.log("out");
      })
      .catch(() => {
        toast.error("Sign out failed!");
        console.log("not out");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border font-semibold text-[#3771FE]"
              : "border  font-semibold text-gray-600"
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
              ? "border font-semibold text-[#3771FE]"
              : "border  font-semibold text-gray-600"
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
              ? "border font-semibold text-[#3771FE]"
              : "border  font-semibold text-gray-600"
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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl play-right-font gradient-text "
          >
            PixArts
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
          <button className="btn" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
