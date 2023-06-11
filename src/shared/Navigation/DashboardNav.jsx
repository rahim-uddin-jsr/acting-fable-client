import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useUserRole from "../../hooks/useUserRole";

const DashboardNav = () => {
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
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && isRole === "instructor" && (
        <>
          <li>
            <NavLink to={`/dashboard/addclass`}>Add A Class</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/myclass`}>My Classes</NavLink>
          </li>
        </>
      )}
      {user && isRole === "admin" && (
        <>
          <li>
            <NavLink to={`/dashboard/manage-classes`}>Manage Classes</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/manage-users`}>Manage Users</NavLink>
          </li>
        </>
      )}
      {user && isRole === "student" && (
        <>
          <li>
            <NavLink to={`/dashboard/selected-classes`}>
              My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/enrolled-classes`}>
              My Enrolled Classes
            </NavLink>
          </li>
        </>
      )}
      {user && isRole && (
        <li>
          <NavLink to={`/dashboard/${isRole}`}>Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-300">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            {navList}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-2xl">actingFable</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <NavLink to={"/signin"} className="btn">
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
  );
};

export default DashboardNav;