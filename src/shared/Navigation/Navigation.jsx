import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import actingImg from "../../assets/monopoly-svgrepo-com.svg";
import useUserRole from "../../hooks/useUserRole";
import "./Navigation.css";
const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const [isRole] = useUserRole();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout()
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const navList = (
    <>
      <li>
        <NavLink className={`navItems`} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={`navItems`} to={"/instructors"}>
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink className={`navItems`} to={"/classes"}>
          Classes
        </NavLink>
      </li>
      {user && isRole && (
        <li>
          <NavLink className={`navItems`} to={`/dashboard/${isRole}`}>
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-white shadow-sm shadow-black/[.3] mb-2">
      <div className="navbar container mx-auto py-[1.25rem]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10 space-y-1"
            >
              {navList}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-3xl h-auto">
            <img width={60} height={60} src={actingImg} alt="" />
            <span className="ms-[-10px] font-medium">Acting Fable</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navList}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <NavLink
              to={"/signin"}
              className="btn auth-btn bg-primary hover:bg-primary/[.7] hover:text-white transition-all px-6 py-2 flex justify-center items-center h-auto w-auto text-white font-semibold text-xl capitalize"
            >
              Login
            </NavLink>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
