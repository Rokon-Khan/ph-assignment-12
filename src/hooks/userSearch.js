import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = (searchQuery = "") => {
  const axiosSecure = useAxiosSecure();
  return useQuery({
    queryKey: ["users", searchQuery],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?search=${searchQuery}`);
      return data;
    },
  });
};

export default useUsers;
