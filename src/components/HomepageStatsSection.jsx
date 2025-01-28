import useDashboardStats from "../hooks/useDashboardStats";
import LoadingSpinner from "./Shared/LoadingSpinner";

const HomepageStatsSection = () => {
  const { data: stats, isLoading, error } = useDashboardStats();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading statistics.</div>;

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center">
      {/* Left Section: Statistics */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-blue-500">Total Users</h3>
          <p className="text-4xl font-extrabold mt-2 text-gray-800">
            {stats.totalUsers}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-500">Total Classes</h3>
          <p className="text-4xl font-extrabold mt-2 text-gray-800">
            {stats.totalClasses}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-red-500">Total Enrollments</h3>
          <p className="text-4xl font-extrabold mt-2 text-gray-800">
            {stats.totalEnrollments}
          </p>
        </div>
      </div>

      {/* Right Section: Image
      <div className="flex-1">
        <img
          src="https://i.ibb.co/7R5Dy5c/education.jpg"
          alt="Education Illustration"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div> */}
    </div>
  );
};

export default HomepageStatsSection;
