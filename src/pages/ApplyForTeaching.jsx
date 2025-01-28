import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth"; // Custom Auth Hook
import useAxiosSecure from "../hooks/useAxiosSecure";

const ApplyForTeaching = () => {
  const { user } = useAuth(); // Logged-in user
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const applicationData = {
      name: user.name,
      email: user.email,
      image: user.photoURL, // User image
      experience: data.experience,
      title: data.title,
      category: data.category,
    };

    try {
      await axiosSecure.post("/apply-teacher", applicationData);
      Swal.fire("Success!", "Your application has been submitted!", "success");
      reset();
    } catch (error) {
      Swal.fire("Error!", "Something went wrong!", "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">
        Apply for Teaching Position
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name (Read Only) */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="w-full p-2 border rounded bg-gray-200"
          />
        </div>

        {/* Email (Read Only) */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-200"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-gray-700">Experience Level</label>
          <select
            {...register("experience")}
            className="w-full p-2 border rounded"
          >
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-Level</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            {...register("title")}
            placeholder="Enter Title"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700">Category</label>
          <select
            {...register("category")}
            className="w-full p-2 border rounded"
          >
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Ethical Hacking">Ethical Hacking</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Graphics Design">Graphics Design</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit for Review
        </button>
      </form>
    </div>
  );
};

export default ApplyForTeaching;
