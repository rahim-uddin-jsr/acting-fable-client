import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Popular from "../Popular/Popular";
import PopularInstrustors from "../PopularInstrustors/PopularInstrustors";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";

const Home = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Slider />
      <Popular />
      <PopularInstrustors />
      <Reviews />
    </div>
  );
};

export default Home;
