import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const useSendUsersDataInBackend = () => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const sendUsersDataInBackend = (userInfo) => {
    userInfo.uid = user.uid;
    axios
      .post("http://localhost:5000/users", userInfo)
      .then(function (response) {
        console.log(response);
      
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return [sendUsersDataInBackend, loading];
};

export default useSendUsersDataInBackend;
