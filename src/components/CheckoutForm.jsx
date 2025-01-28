// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useNavigate, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import useClassDetails from "../hooks/useClassDetails";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSecure = useAxiosSecure();
//   const { id } = useParams();
//   const { data: classDetails } = useClassDetails(id);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     const card = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.error(error);
//       Swal.fire("Error", error.message, "error");
//       return;
//     }

//     const { id: transactionId } = paymentMethod;

//     // Save payment info to backend
//     const paymentData = {
//       transactionId,
//       classId: id,
//       userId: classDetails.teacher.email,
//       amount: classDetails.price,
//       enrolledAt: new Date(),
//     };

//     await axiosSecure.post("/payments", paymentData);

//     Swal.fire("Success", "Payment completed successfully!", "success");
//     navigate("/dashboard/my-enroll-classes");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-gray-100 p-6 rounded-lg shadow-md"
//     >
//       <CardElement className="p-4 border rounded-lg mb-4" />
//       <button
//         type="submit"
//         disabled={!stripe}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
//       >
//         Pay ${classDetails.price}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth"; // For logged-in user info
import useAxiosSecure from "../hooks/useAxiosSecure";
import useClassDetails from "../hooks/useClassDetails";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: classDetails } = useClassDetails(id);
  const { user } = useAuth(); // Logged-in user details
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error(error);
      Swal.fire("Error", error.message, "error");
      return;
    }

    const { id: transactionId } = paymentMethod;

    // Save payment info to backend
    const paymentData = {
      transactionId,
      classId: id,
      userEmail: user.email, // Logged-in user email
      teacherEmail: classDetails.teacher.email, // Teacher email from class details
      amount: classDetails.price,
    };

    try {
      const response = await axiosSecure.post("/payments", paymentData);

      if (response.data.success) {
        Swal.fire("Success", "Payment completed successfully!", "success");
        navigate("/dashboard/my-enroll-classes");
      }
    } catch (error) {
      console.error("Error saving payment:", error);
      Swal.fire("Error", "Payment failed! Please try again.", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-lg shadow-md"
    >
      <CardElement className="p-4 border rounded-lg mb-4" />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
      >
        Pay ${classDetails.price}
      </button>
    </form>
  );
};

export default CheckoutForm;
