import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClassDetails = (id) => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: ["class", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/class/${id}`);
      return data;
    },
  });
};

export default useClassDetails;
