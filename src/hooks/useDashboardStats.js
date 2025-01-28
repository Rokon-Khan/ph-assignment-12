import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDashboardStats = () => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/dashboard-stats");
      return data;
    },
  });
};

export default useDashboardStats;
