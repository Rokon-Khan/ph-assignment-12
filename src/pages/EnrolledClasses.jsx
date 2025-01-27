import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAxiosSecure from "../hooks/useAxiosSecure";

const EnrolledClasses = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: enrolledClasses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["enrolled-classes"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/enrolled-classes");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <div>Error fetching enrolled classes.</div>;

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">My Enrolled Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledClasses.map((cls) => (
          <div key={cls.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{cls.name}</h3>
            <p className="text-sm text-gray-600">
              {cls.description.slice(0, 80)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClasses;
