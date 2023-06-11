import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const useSelectedClaeess = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/selected/${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    },
  });

  return { selectedClasses, refetch };
};
export default useSelectedClaeess;

// queryFn: async () => {
//     const res = await fetch(`https://bistro-boss-server-fawn.vercel.app/carts?email=${user?.email}`, { headers: {
//         authorization: `bearer ${token}`
//     }})
//     return res.json();
// },
