import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

// Fetch all classes
export const useClasses = () => {
  const axiosSecure = useAxiosSecure();
  return useQuery({
    queryKey: ["allclasses"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allclasses");
      return data;
    },
  });
};

// Update class status
export const useUpdateClassStatus = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  return useMutation({
    mutationFn: async ({ id, status }) => {
      // Perform the PATCH request to update the class status
      const response = await axiosSecure.patch(`/allclasses/${id}`, { status });
      return response.data; // Return data for any further processing
    },
    onSuccess: () => {
      // Invalidate the "allclasses" query to refresh data
      queryClient.invalidateQueries(["allclasses"]);
    },
    onError: (error) => {
      console.error("Error updating class status:", error);
    },
  });
};
