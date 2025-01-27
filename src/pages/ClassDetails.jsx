import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import useClassDetails from "../hooks/useClassDetails";

const ClassDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data: classDetails, isLoading, error } = useClassDetails(id);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <div>Error fetching class details.</div>;

  const { name, description, price, image, teacher } = classDetails;

  // Validation for Teacher Enrollment
  const handleEnroll = () => {
    if (teacher.email === user.email) {
      Swal.fire({
        icon: "error",
        title: "You are the creator of the class",
        text: "Teachers cannot enroll in their own classes!",
      });
      return;
    }
    navigate(`/payment/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 my-10">
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-lg font-medium text-gray-800 mb-4">Price: ${price}</p>
      <p className="text-sm font-medium text-gray-700">
        Instructor: {teacher.name}
      </p>
      <button
        onClick={handleEnroll}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
      >
        Pay Now
      </button>
    </div>
  );
};

export default ClassDetails;
