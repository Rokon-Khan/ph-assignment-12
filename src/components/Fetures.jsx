import "animate.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Features = () => {
  return (
    <div>
      <div className="hero bg-base-200 max-w-7xl mx-auto my-6 rounded-lg animate__animated animate__zoomIn">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="lg:text-4xl text-3xl font-bold">
              Features of Education Management System
            </h1>
            <p className="py-6 max-w-lg mx-auto">
              Our Education Management System is designed to streamline
              learning, teaching, and administrative tasks. It offers a seamless
              experience for students, teachers, and administrators to interact,
              manage courses, and track progress effectively.
            </p>
            <div className="card rounded-xl space-y-6">
              <h3 className="lg:text-2xl text-2xl font-bold text-center">
                Key Features
              </h3>
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 ">
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <FaUserGraduate className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Student Progress Tracking
                  </h3>
                  <p>
                    Students can track their academic progress, view grades,
                    assignments, and receive performance feedback in real-time.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <GiTeacher className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Teacher Course Management
                  </h3>
                  <p>
                    Teachers can create and manage courses, schedule classes,
                    and evaluate student performance efficiently.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <MdDashboard className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Admin Dashboard
                  </h3>
                  <p>
                    A powerful dashboard for administrators to oversee the
                    entire system, manage users, and generate reports.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <RiSecurePaymentLine className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Secure Payments & Billing
                  </h3>
                  <p>
                    Integrated secure payment options for course enrollment, fee
                    management, and financial transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
