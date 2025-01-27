import ClassCard from "../components/ClassCard";
import useApprovedClasses from "../hooks/useApprovedClasses";

const ApprovedClassesPage = () => {
  const { data: classes, isLoading, error } = useApprovedClasses();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching classes.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {classes.map((classData) => (
        <ClassCard key={classData._id} classData={classData} />
      ))}
    </div>
  );
};

export default ApprovedClassesPage;
