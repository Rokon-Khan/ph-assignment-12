import "animate.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiClassicalKnowledge } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

const AboutUs = () => {
  return (
    <div>
      <div className="hero bg-base-200 max-w-[1024px] mx-auto my-6 rounded-lg animate__animated animate__zoomIn">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="lg:text-4xl text-3xl font-bold">About Us</h1>
            <p className="py-6 max-w-lg mx-auto">
              Our Education Management System is designed to simplify learning
              and teaching experiences. We provide an integrated platform that
              connects students, teachers, and administrators, enabling seamless
              course management, interactive learning, and efficient progress
              tracking.
            </p>
            <div className="card rounded-xl space-y-6">
              <h3 className="lg:text-2xl text-2xl font-bold text-center">
                Key Features
              </h3>
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 ">
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <FaChalkboardTeacher className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Interactive Virtual Classrooms
                  </h3>
                  <p>
                    Engage students with live sessions, recorded lectures, and
                    discussion forums. Our platform ensures an immersive
                    learning experience with real-time teacher-student
                    interaction.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <GiClassicalKnowledge className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Course & Curriculum Management
                  </h3>
                  <p>
                    Teachers can design, modify, and manage course materials
                    effortlessly. Students get structured access to lessons,
                    assignments, and study materials.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <MdSupportAgent className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    24/7 Support & Assistance
                  </h3>
                  <p>
                    We offer dedicated support to ensure smooth platform
                    operations. Whether it’s technical assistance or academic
                    queries, our team is always ready to help.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <RiTeamLine className="text-5xl text-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Collaborative Learning Environment
                  </h3>
                  <p>
                    Students and teachers can collaborate effectively through
                    group projects, peer discussions, and resource sharing,
                    fostering an engaging educational community.
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

export default AboutUs;
