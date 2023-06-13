import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClaeess = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading && user !== null,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected/${user?.email}`, {});
      return res.data;
    },
  });

  return { selectedClasses, refetch };
};
export default useSelectedClaeess;
