import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: isRole, isLoading: isRoleLoading } = useQuery({
    queryKey: ["isRole", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      // return res.data.admin;
      return res.data.role;
    },
  });
  return [isRole, isRoleLoading];
};
export default useUserRole;
