import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navigation from "../../shared/Navigation/Navigation";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
