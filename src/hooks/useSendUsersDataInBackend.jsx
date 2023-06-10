import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const useSendUsersDataInBackend = () => {
  const { loading, setLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const sendUsersDataInBackend = (userInfo) => {
    userInfo.uid = user.uid;
    axios
      .post("http://localhost:5000/users", userInfo)
      .then(function (response) {
        console.log(response);
        setLoading(false);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  return [sendUsersDataInBackend, loading];
};

export default useSendUsersDataInBackend;
