import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/queries"> Queries</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/recommendations">Recommendations For Me</NavLink>
          </li>
          <li>
            <NavLink to="/myQueries">My Queries</NavLink>
          </li>
          <li>
            <NavLink to="/my-recommendations">My Recommendations</NavLink>
          </li>
        </>
      )}
    </>
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="navbar bg-base-300 container mx-auto rounded shadow-md">
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
            className="menu menu-sm dropdown-content bg-base-100 text-2xl rounded-box z-50 mt-3 md:w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-[18px] md:text-3xl ">
          <p className="font-bold font-caveat">
            Epic<span className="text-orange-500 ">Emporium</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal md:font-semibold font-lato   px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <label className="cursor-pointer grid place-items-center mx-2 z-50">
          <input
            type="checkbox"
            onChange={handleToggle}
            className="toggle theme-controller bg-base-content row-start-1 z-50 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user?.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm z dropdown-content bg-base-100 rounded-box z-50 md:z-50 lg:50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between font-bold">
                  {user && user?.displayName}
                </a>
              </li>
              <li>
                <a className="justify-between text-[14px] font-bold">
                  {user && user?.email}
                </a>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/add-query">
                      <button className="btn btn-sm w-44 bg-purple-600 text-white">
                        Add Query
                      </button>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm w-48 bg-teal-600 text-white"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <Link to="/login" className="flex justify-center ">
                  <button className="btn">Log In</button>
                </Link>
              )}
            </ul>
          </div>
        ) : (
          <span>
            <NavLink to="/login">Login</NavLink>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
