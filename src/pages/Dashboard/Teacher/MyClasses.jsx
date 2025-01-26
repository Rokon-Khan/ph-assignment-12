// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import useAuth from "../../../hooks/useAuth";
// import ClassCard from "../../ClassCard";

// const fetchClasses = async (email) => {
//   const response = await axios.get(`/my-classes`, {
//     params: { email },
//   });
//   return response.data;
// };

// const MyClasses = () => {
//   const { user } = useAuth();

//   const {
//     data: classes = [],
//     isLoading,
//     isError,
//   } = useQuery(["myClasses", user?.email], () => fetchClasses(user?.email), {
//     enabled: !!user?.email,
//   });

//   if (isLoading) {
//     return <LoadingSpinner></LoadingSpinner>;
//   }

//   if (isError || !classes.length) {
//     return <p>No classes found or an error occurred.</p>;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {classes.map((classData) => (
//         <ClassCard key={classData._id} classData={classData} />
//       ))}
//     </div>
//   );
// };

// export default MyClasses;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import ClassCard from "../../ClassCard";

const MyClasses = () => {
  const { user } = useAuth(); // Get the logged-in user's data

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["myClasses", user?.email], // Unique query key
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/my-classes`,
        {
          params: { email: user?.email }, // Pass email as a query parameter
        }
      );
      return data; // Return the data fetched
    },
    enabled: !!user?.email, // Only fetch if email is available
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!classes.length) {
    return <p>No classes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classData) => (
        <ClassCard key={classData._id} classData={classData} />
      ))}
    </div>
  );
};

export default MyClasses;
