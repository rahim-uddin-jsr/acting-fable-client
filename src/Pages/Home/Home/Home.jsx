import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Home = () => {
  const { auth } = useContext(AuthContext);

  return <div>Home</div>;
};

export default Home;
