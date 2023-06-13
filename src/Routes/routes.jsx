import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import Classes from "../Pages/Classes/Classes";
import ManageClasses from "../Pages/Dashboards/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboards/AdminDashboard/ManageUsers/ManageUsers";
import AddClass from "../Pages/Dashboards/InstructorDashboard/AddClass/AddClass";
import MyCasses from "../Pages/Dashboards/InstructorDashboard/MyClasses/MyCasses";
import MyEnrolledClasses from "../Pages/Dashboards/StudentDashBoard/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClasses from "../Pages/Dashboards/StudentDashBoard/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/Dashboards/StudentDashBoard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboards/StudentDashBoard/Payment/PaymentHistory";
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
            <StudentDashBoard />
            {/* <InstructorDashboard /> */}
          </InstructorRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <PrivateRoute>
            <InstructorRoute>
              <AddClass />
            </InstructorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyCasses />
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
        path: "payment",
        element: (
          <StudentRoute>
            <Payment />
          </StudentRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <StudentDashBoard />
            {/* <AdminDashboard /> */}
          </AdminRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "selected-classes",
        element: (
          <PrivateRoute>
            <StudentRoute>
              <MySelectedClasses />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "enrolled-classes",
        element: (
          <PrivateRoute>
            <StudentRoute>
              <MyEnrolledClasses />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "transactions",
        element: (
          <PrivateRoute>
            <StudentRoute>
              <PaymentHistory />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default routes;
