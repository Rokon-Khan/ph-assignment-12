const ClassCard = ({ classData }) => {
  const { name, description, price, image, teacher, totalEnrolment } =
    classData;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {description.slice(0, 100)}...
      </p>
      <p className="text-sm font-medium text-gray-800">Price: ${price}</p>
      <p className="text-sm font-medium text-gray-800">
        Teacher: {teacher.name}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        {totalEnrolment > 0
          ? `Total Enrolled: ${totalEnrolment}`
          : "Enrollment On Going"}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Enroll
      </button>
    </div>
  );
};

export default ClassCard;
