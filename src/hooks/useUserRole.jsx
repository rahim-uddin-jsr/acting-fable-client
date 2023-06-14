import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isRole, isLoading } = useQuery({
    queryKey: ["isRole", user?.email],
    enabled: !loading && user?.role !== "student" && user !== null,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://acting-fable-server.vercel.app/users/role/${user?.email}`
      );
      return res.data.role;
    },
  });
  return [isRole, isLoading];
};
export default useUserRole;
