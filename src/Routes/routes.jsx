import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import StudentDashBoard from "../Pages/Dashboards/StudentDashBoard/StudentDashBoard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Register /> },
      { path: "/signin", element: <Login /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <StudentDashBoard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default routes;
