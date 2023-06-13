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
        <NavLink to={`/dashboard/${isRole}`}>Home</NavLink>
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
          <li>
            <NavLink to={`/dashboard/transactions`}>Transactions</NavLink>
          </li>
        </>
      )}

      <div className="divider"></div>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li onClick={handleLogOut}>
        <a>Logout</a>
      </li>
    </>
  );
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <div className="navbar-start w-full">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-52 z-10"
          >
            {navList}
          </ul>
        </div>
        <Link
          to={`/dashboard/${isRole}`}
          className="btn btn-ghost  normal-case text-2xl mt-12 mb-5"
        >
          actingFable
        </Link>
      </div>
      <label tabIndex={0} className=" avatar w-24">
        <div className="w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-vertical px-1">{navList}</ul>
      </div>
    </div>
  );
};

export default DashboardNav;
