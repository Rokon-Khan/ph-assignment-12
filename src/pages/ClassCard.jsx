import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ classData, handleDelete }) => {
  const navigate = useNavigate();
  const { _id, name, price, description, image, status, teacher } = classData;

  //   const handleDelete = async () => {
  //     if (window.confirm("Are you sure you want to delete this class?")) {
  //       try {
  //         await axios.delete(`/classes/${_id}`);
  //         alert("Class deleted successfully");
  //         window.location.reload(); // Reload the page to update the list
  //       } catch (error) {
  //         console.error("Failed to delete class:", error);
  //       }
  //     }
  //   };

  const handleUpdate = () => {
    navigate(`/dashboard/update-class/${_id}`);
  };

  const handleSeeDetails = () => {
    navigate(`/dashboard/my-class/${_id}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-sm text-gray-600">Teacher: {teacher.name}</p>
      <p className="text-sm text-gray-600">Email: {teacher.email}</p>
      <p className="text-sm text-gray-600">Price: ${price}</p>
      <p className="text-sm text-gray-600">Description: {description}</p>
      <p className="text-sm text-gray-600">Status: {status}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update
        </button>
        {/* <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button> */}
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
        <button
          onClick={handleSeeDetails}
          disabled={status !== "approved"}
          className={`px-4 py-2 rounded ${
            status === "approved"
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          See Details
        </button>
      </div>
    </div>
  );
};

ClassCard.propTypes = {
  classData: PropTypes.object.isRequired,
};

export default ClassCard;
