import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApprovedClasses = () => {
  const axiosSecure = useAxiosSecure();
  return useQuery({
    queryKey: ["approved-classes"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/approved-classes");
      return data;
    },
  });
};

export default useApprovedClasses;
