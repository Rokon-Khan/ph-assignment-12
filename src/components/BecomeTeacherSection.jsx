import { Link } from "react-router-dom";

const BecomeTeacherSection = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 flex flex-col md:flex-row items-center gap-8">
      {/* Left: Image Section */}
      <div className="relative w-full md:w-1/2">
        <div className="absolute top-4 left-4 w-full h-full bg-yellow-400 rounded-lg -z-10"></div>
        <img
          src="https://i.ibb.co.com/wg1v7gr/instructor.jpg" // Replace with your image URL
          alt="Become an Instructor"
          className="w-full rounded-lg"
        />
      </div>

      {/* Right: Content Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Become an Instructor</h2>
        <p className="text-gray-600 mb-4">
          Instructors from around the world teach millions of learners on our
          platform. We provide the tools and skills to help you teach what you
          love.
        </p>
        <Link
          to="/teach-on"
          className="bg-blue-500 text-white py-2 px-5 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Become A Teacher
        </Link>
      </div>
    </div>
  );
};

export default BecomeTeacherSection;
