import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  

  const { user, logOut } = useContext(AuthContext);


  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/query"> Query</NavLink>
      </li>
      {/* <li><NavLink to="/about">About</NavLink></li> */}
      {user && (
        <>
          <li>
            <NavLink to="/recommendations">Recommendations For Me</NavLink>
          </li>
          <li>
            <NavLink to="/my-queries">My Queries</NavLink>
          </li>
          <li>
            <NavLink to="/my-recommendations">My Recommendations</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 container mx-auto ">
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
            className="menu menu-sm dropdown-content bg-base-100 text-2xl rounded-box z-[1] mt-3 md:w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-3xl ">
          <p>EpicEmporium</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
                <li className="bg-purple-600 p-1 rounded-xl text-white font-semibold">
                  <Link to='/add-query'>
                    <button className="flex justify-center">Add Query</button>
                  </Link>
                </li>
                <li>
                  <button className="btn" onClick={handleLogOut}>
                    Log Out
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
      </div>
    </div>
  );
};

export default Navbar;
