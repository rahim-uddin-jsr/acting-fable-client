import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";

const Main = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
