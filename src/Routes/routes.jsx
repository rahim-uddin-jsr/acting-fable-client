import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import Classes from "../Pages/Classes/Classes";
import AdminDashboard from "../Pages/Dashboards/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../Pages/Dashboards/InstructorDashboard/InstructorDashboard";
import StudentDashBoard from "../Pages/Dashboards/StudentDashBoard/StudentDashBoard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoute from "./PrivateRoute/AdminRoute";
import InstructorRoute from "./PrivateRoute/InstructorRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import StudentRoute from "./PrivateRoute/StudentRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Register /> },
      { path: "/signin", element: <Login /> },
      { path: "/instructors", element: <Instructor /> },
      { path: "/classes", element: <Classes /> },
      // {
      //   path: "/dashboard",
      //   element: (
      // <PrivateRoute>
      //   <StudentDashBoard />
      // </PrivateRoute>,
      //   ),
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "instructor",
        element: (
          <InstructorRoute>
            <InstructorDashboard />
          </InstructorRoute>
        ),
      },
      {
        path: "student",
        element: (
          <StudentRoute>
            <StudentDashBoard />
          </StudentRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default routes;
