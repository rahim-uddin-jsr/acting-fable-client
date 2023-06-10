import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useUserRole from "../../../hooks/useUserRole";

const Home = () => {
  const { auth } = useContext(AuthContext);
  const [isRole] = useUserRole();
  console.log(isRole);
  return (
    <div>
      Home
      {/* TODO:DO this after server works done */}
    </div>
  );
};

export default Home;
