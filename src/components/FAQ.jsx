const FAQ = () => {
  return (
    <div className="card bg-base-200 max-w-6xl mx-auto p-6 my-4">
      <div>
        <h2 className="text-4xl font-bold text-center">FAQ</h2>
      </div>

      {/* First FAQ */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do I sign up and log in to the Class Management System?
        </div>
        <div className="collapse-content">
          <p>
            To sign up or log in, use your email and password to create an
            account. Once logged in, you’ll have access to the platform’s
            features based on your role (teacher or student).
          </p>
        </div>
      </div>

      {/* Second FAQ */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do I enroll in a class?
        </div>
        <div className="collapse-content">
          <p>
            Students can browse available classes and enroll by selecting a
            course. After enrollment, they will receive access to course
            materials and assignments.
          </p>
        </div>
      </div>

      {/* Third FAQ */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do I track my assignments and deadlines?
        </div>
        <div className="collapse-content">
          <p>
            Students can track assignments and deadlines in the 'Assignments'
            section. Teachers will also notify students about upcoming
            deadlines.
          </p>
        </div>
      </div>

      {/* Fourth FAQ */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do teachers create and manage classes?
        </div>
        <div className="collapse-content">
          <p>
            Teachers can create and manage classes from their dashboard. They
            can set course details, assignments, and track student progress all
            in one place.
          </p>
        </div>
      </div>

      {/* Fifth FAQ */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is my class data secure?
        </div>
        <div className="collapse-content">
          <p>
            Yes, data security is a priority. We use secure authentication and
            encrypted communication to ensure that only authorized users can
            access their accounts and class materials.
          </p>
        </div>
      </div>

      {/* Sixth FAQ */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I access my classes and assignments on mobile?
        </div>
        <div className="collapse-content">
          <p>
            Yes, the platform is fully responsive. You can access your classes
            and assignments from your computer, tablet, or smartphone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
