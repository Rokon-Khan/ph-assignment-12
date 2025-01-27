import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useClassProgress = (classId) => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: ["classProgress", classId],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allclasses/${classId}/progress`);
      return data;
    },
    enabled: !!classId,
  });
};
