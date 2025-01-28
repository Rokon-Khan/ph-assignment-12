// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "./Shared/LoadingSpinner";

// const PopularClasses = () => {
//   const {
//     data: allClasses = [],
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["popularClasses"],
//     queryFn: async () => {
//       const { data } = await axios.get("/allclasses");
//       return data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;
//   if (error) {
//     return (
//       <p className="text-red-500 text-center mt-10">
//         Failed to fetch data: {error.message}
//       </p>
//     );
//   }

//   // Sort classes based on totalEnrolled in descending order
//   const sortedClasses = allClasses.sort(
//     (a, b) => b.totalEnrolled - a.totalEnrolled
//   );

//   // Get the top 3 classes
//   const topClasses = sortedClasses.slice(0, 3);

//   return (
//     <section className="max-w-7xl mx-auto my-10">
//       <h2 className="text-3xl font-semibold text-center mb-8">
//         Popular Classes
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {topClasses.map((classItem) => (
//           <div
//             key={classItem._id}
//             className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition-shadow"
//           >
//             <img
//               src={classItem.image}
//               alt={classItem.name}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
//             <p className="text-gray-600 mb-4">{classItem.description}</p>
//             <div className="flex items-center mb-4">
//               <img
//                 src={classItem.teacher.image}
//                 alt={classItem.teacher.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div>
//                 <p className="font-medium">{classItem.teacher.name}</p>
//                 <p className="text-sm text-gray-500">
//                   {classItem.teacher.email}
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="font-bold text-lg text-green-500">
//                 ${classItem.price}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Enrolled: {classItem.totalEnrolled}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularClasses;

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "./Shared/LoadingSpinner";

// const PopularClasses = () => {
//   const {
//     data: classes = [],
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["popularClasses"],
//     queryFn: async () => {
//       const { data } = await axios.get("/allclasses");
//       return data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;
//   if (error) {
//     return (
//       <p className="text-red-500 text-center mt-10">
//         Failed to fetch data: {error.message}
//       </p>
//     );
//   }

//   // Check if classes is an array before calling sort
//   const sortedClasses = Array.isArray(classes)
//     ? classes.sort((a, b) => b.totalEnrolled - a.totalEnrolled)
//     : [];

//   // Get the top 3 classes
//   const topClasses = sortedClasses.slice(0, 3);

//   if (topClasses.length === 0) {
//     return (
//       <p className="text-gray-500 text-center mt-10">
//         No popular classes available at the moment.
//       </p>
//     );
//   }

//   return (
//     <section className="max-w-7xl mx-auto my-10">
//       <h2 className="text-3xl font-semibold text-center mb-8">
//         Popular Classes
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {topClasses.map((classItem) => (
//           <div
//             key={classItem._id}
//             className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition-shadow"
//           >
//             <img
//               src={classItem.image}
//               alt={classItem.name}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
//             <p className="text-gray-600 mb-4">{classItem.description}</p>
//             <div className="flex items-center mb-4">
//               <img
//                 src={classItem.teacher.image}
//                 alt={classItem.teacher.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div>
//                 <p className="font-medium">{classItem.teacher.name}</p>
//                 <p className="text-sm text-gray-500">
//                   {classItem.teacher.email}
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="font-bold text-lg text-green-500">
//                 ${classItem.price}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Enrolled: {classItem.totalEnrolled}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularClasses;

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import LoadingSpinner from "./Shared/LoadingSpinner";

// const PopularClasses = () => {
//   const {
//     data: classes = [],
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["popularClasses"],
//     queryFn: async () => {
//       const { data } = await axios.get("/allclasses");
//       console.log("API Response Data:", data); // Debugging log to check the API response
//       return data;
//     },
//   });

//   if (isLoading) return <LoadingSpinner />;
//   if (error) {
//     return (
//       <p className="text-red-500 text-center mt-10">
//         Failed to fetch data: {error.message}
//       </p>
//     );
//   }

//   // Check if classes is an array before calling sort
//   const sortedClasses = Array.isArray(classes)
//     ? classes.sort((a, b) => b.totalEnrolled - a.totalEnrolled)
//     : [];

//   console.log("Sorted Classes:", sortedClasses); // Debugging log to check if sorting works

//   // Get the top 3 classes
//   const topClasses = sortedClasses.slice(0, 3);

//   if (topClasses.length === 0) {
//     return (
//       <p className="text-gray-500 text-center mt-10">
//         No popular classes available at the moment.
//       </p>
//     );
//   }

//   return (
//     <section className="max-w-7xl mx-auto my-10">
//       <h2 className="text-3xl font-semibold text-center mb-8">
//         Popular Classes
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {topClasses.map((classItem) => (
//           <div
//             key={classItem._id}
//             className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition-shadow"
//           >
//             <img
//               src={classItem.image}
//               alt={classItem.name}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
//             <p className="text-gray-600 mb-4">{classItem.description}</p>
//             <div className="flex items-center mb-4">
//               <img
//                 src={classItem.teacher.image}
//                 alt={classItem.teacher.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div>
//                 <p className="font-medium">{classItem.teacher.name}</p>
//                 <p className="text-sm text-gray-500">
//                   {classItem.teacher.email}
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <p className="font-bold text-lg text-green-500">
//                 ${classItem.price}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Enrolled: {classItem.totalEnrolled}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularClasses;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./Shared/LoadingSpinner";

const PopularClasses = () => {
  const {
    data: classes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allclasses`
      );
      console.log("API Response Data:", data); // Debugging log to check the API response
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) {
    return (
      <p className="text-red-500 text-center mt-10">
        Failed to fetch data: {error.message}
      </p>
    );
  }

  // Ensure classes is an array and is not empty
  if (!Array.isArray(classes) || classes.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10">
        No popular classes available at the moment.
      </p>
    );
  }

  // Sort classes based on totalEnrolled (falling back to 0 if undefined)
  const sortedClasses = [...classes].sort(
    (a, b) => (b.totalEnrolled || 0) - (a.totalEnrolled || 0)
  );

  // Get the top 3 classes
  const topClasses = sortedClasses.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto my-10">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Popular Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topClasses.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition-shadow"
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
            <p className="text-gray-600 mb-4">{classItem.description}</p>
            <div className="flex items-center mb-4">
              <img
                src={classItem.teacher.image}
                alt={classItem.teacher.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{classItem.teacher.name}</p>
                <p className="text-sm text-gray-500">
                  {classItem.teacher.email}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-green-500">
                ${classItem.price}
              </p>
              <p className="text-lg text-slate-800 font-bold">
                Enrolled: {classItem.totalEnrolled}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
