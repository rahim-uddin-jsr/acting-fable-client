import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Home = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      Home
      {/* TODO:DO this after server works done */}
    </div>
  );
};

export default Home;
