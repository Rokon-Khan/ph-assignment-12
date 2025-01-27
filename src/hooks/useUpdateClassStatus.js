import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useUpdateClassStatus = () => {
  const queryClient = useQueryClient(); // Required for cache invalidation
  const axiosSecure = useAxiosSecure();

  return useMutation(
    async ({ id, status }) => {
      // Perform the PATCH request to update the class status
      const response = await axiosSecure.patch(`/allclasses/${id}`, { status });
      return response.data; // Return the updated data for further use
    },
    {
      onSuccess: () => {
        // Invalidate the "allclasses" query to refetch the updated data
        queryClient.invalidateQueries(["allclasses"]);
      },
      onError: (error) => {
        console.error("Error updating class status:", error);
      },
    }
  );
};
