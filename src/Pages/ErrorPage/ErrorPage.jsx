import Lottie from "lottie-react";
import { useNavigate, useRouteError } from "react-router-dom";
import animationData from "./89867-404-error.json";
const ErrorPage = () => {
  const navigate = useNavigate();
  const { error } = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="w-[60%] mx-auto">
        <Lottie animationData={animationData} loop={true} />
        <br />
        <span className="text-red-400 text-2xl">{error?.message}</span>
        <br /> <br />
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-active btn-neutral "
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
