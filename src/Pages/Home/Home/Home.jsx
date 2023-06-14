import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Popular from "../Popular/Popular";
import PopularInstrustors from "../PopularInstrustors/PopularInstrustors";

const Home = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      Home
      {/* TODO:DO this after server works done */}
      <Popular />
      <PopularInstrustors />
    </div>
  );
};

export default Home;
