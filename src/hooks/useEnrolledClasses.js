// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../hooks/useAuth";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// const useEnrolledClasses = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   return useQuery({
//     queryKey: ["enrolled-classes", user?.email],
//     queryFn: async () => {
//       if (!user?.email) throw new Error("User email is required.");
//       const { data } = await axiosSecure.get(
//         `/enrolled-classes?email=${user.email}`
//       );
//       return data;
//     },
//   });
// };

// export default useEnrolledClasses;

// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../hooks/useAuth";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// const useEnrolledClasses = () => {
//   const { user } = useAuth(); // Get logged-in user's email
//   const axiosSecure = useAxiosSecure();

//   return useQuery({
//     queryKey: ["enrolled-classes", user?.email], // Include email in the query key
//     queryFn: async () => {
//       if (!user?.email) throw new Error("User email is required.");
//       const { data } = await axiosSecure.get(
//         `/enrolled-classes?email=${user.email}`
//       );
//       return data;
//     },
//   });
// };

// export default useEnrolledClasses;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClasses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: ["enrolled-classes", user.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/enrolled-classes?email=${user.email}`
      );
      return data;
    },
    enabled: !!user.email, // Ensures the query doesn't run if email is not available
  });
};

export default useEnrolledClasses;
