// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { TbFidgetSpinner } from "react-icons/tb";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { imageUpload } from "../api/utils";
// import useAuth from "../hooks/useAuth";

// const Register = () => {
//   // const auth = getAuth();
//   // const provider = new GoogleAuthProvider();
//   const { createUser, updateUserProfile, signInWithGoogle, loading } =
//     useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [success, setSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const form = new FormData(e.currentTarget);
//     const name = form.get("name");
//     const email = form.get("email");
//     const password = form.get("password");
//     const image = form.get("image"); // Correct way to access the image file

//     //1. send image data to imgbb
//     const photoURL = await imageUpload(image);

//     const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//     setErrorMessage("");
//     setSuccess(false);

//     if (password.length < 6) {
//       setErrorMessage("Password should be 6 characters or longer");
//       return;
//     }

//     if (!regex.test(password)) {
//       setErrorMessage(
//         "At least one uppercase, one lowercase, and more than 6 characters"
//       );
//       return;
//     }

//     try {
//       //2. User Registration
//       const result = await createUser(email, password);

//       //3. Save username & profile photo
//       await updateUserProfile(name, photoURL);
//       console.log(result);

//       // Prepare user object for MongoDB
//       const newUser = {
//         uid: result.user.uid, // Ensure you reference the correct user object
//         name,
//         photo: photoURL, // Correctly use photoURL instead of image
//         email,
//       };

//       // Add user to MongoDB
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });

//       const data = await response.json();
//       if (data.insertedId) {
//         Swal.fire({
//           title: "Wow!!!",
//           text: "User Added Successfully!",
//           icon: "success",
//         });
//         navigate(location?.state ? location.state : "/");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setErrorMessage(error.message);
//     }
//   };

//   const handleSignWithGoogle = async () => {
//     try {
//       // const result = await signInWithPopup(auth, provider);
//       // const firebaseUser = result.user;
//       //User Registration using google
//       const result = await signInWithGoogle();

//       const firebaseUser = result.user;
//       // Prepare user object for MongoDB
//       const newUser = {
//         uid: firebaseUser.uid,
//         name: firebaseUser.displayName,
//         photo: firebaseUser.photoURL,
//         email: firebaseUser.email,
//       };

//       // Add user to MongoDB
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });

//       const data = await response.json();
//       if (data.insertedId) {
//         Swal.fire({
//           title: "Wow!!!",
//           text: "User Added Successfully!",
//           icon: "success",
//         });
//         navigate(location?.state ? location.state : "/");
//       }
//     } catch (error) {
//       console.error("Error during Google sign-in:", error);
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <>
//       <div className="my-10">
//         <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
//           <div
//             className="hidden bg-cover lg:block lg:w-1/2"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
//             }}
//           ></div>

//           <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
//             {/* <div className="flex justify-center mx-auto">
//               <img
//                 className="w-auto h-7 sm:h-8"
//                 src="https://merakiui.com/images/logo.svg"
//                 alt=""
//               />
//             </div> */}

//             <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
//               Welcome back!
//             </p>

//             <button
//               onClick={handleSignWithGoogle}
//               className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
//             >
//               <div className="px-4 py-2">
//                 <svg className="w-6 h-6" viewBox="0 0 40 40">
//                   <path
//                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                     fill="#FFC107"
//                   />
//                   <path
//                     d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
//                     fill="#FF3D00"
//                   />
//                   <path
//                     d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
//                     fill="#4CAF50"
//                   />
//                   <path
//                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                     fill="#1976D2"
//                   />
//                 </svg>
//               </div>

//               <span className="w-5/6 px-4 py-3 font-bold text-center">
//                 Create Account With Google
//               </span>
//             </button>

//             <div className="flex items-center justify-between mt-4">
//               <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

//               <a
//                 href="#"
//                 className="text-xs text-center text-gray-800 font-bold dark:text-gray-400 hover:underline"
//               >
//                 Or Create Account with email
//               </a>

//               <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
//             </div>

//             <form onSubmit={handleRegister}>
//               <div className="mt-4">
//                 <label
//                   className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//                   htmlFor="LoggingEmailAddress"
//                 >
//                   Your Full Name
//                 </label>
//                 <input
//                   id="userName"
//                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//                   type="text"
//                   name="name"
//                 />
//               </div>
//               <div className="mt-4">
//                 <label
//                   className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//                   htmlFor="LoggingEmailAddress"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="LoggingEmailAddress"
//                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//                   type="email"
//                   name="email"
//                 />
//               </div>

//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <label
//                     className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//                     htmlFor="loggingPassword"
//                   >
//                     Password
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <input
//                     id="loggingPassword"
//                     className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                   />
//                   <p
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="btn btn-xs absolute right-2 top-2"
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash className="text-black"></FaEyeSlash>
//                     ) : (
//                       <FaEye className="text-black"></FaEye>
//                     )}
//                   </p>
//                 </div>
//               </div>
//               {/* <div className="mt-4">
//                 <div className="flex justify-between">
//                   <label
//                     className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//                     htmlFor="loggingPassword"
//                   >
//                     Photo URL
//                   </label>
//                 </div>

//                 <input
//                   id="loggingPassword"
//                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//                   type="text"
//                   name="photo"
//                 />
//               </div> */}
//               <div className="mt-4">
//                 <label htmlFor="image" className="block mb-2 text-sm">
//                   Upload Your Profile Image:
//                 </label>
//                 <input
//                   required
//                   type="file"
//                   id="image"
//                   name="image"
//                   accept="image/*"
//                 />
//               </div>

//               <div className="mt-6">
//                 {/* <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
//                   Create Account
//                 </button> */}
//                 <button
//                   type="submit"
//                   className="bg-lime-500 w-full rounded-md py-3 text-white"
//                 >
//                   {loading ? (
//                     <TbFidgetSpinner className="animate-spin m-auto" />
//                   ) : (
//                     "Continue"
//                   )}
//                 </button>
//               </div>
//               {errorMessage && <p className="text-red-600">{errorMessage}</p>}
//               {success && (
//                 <p className="text-orange-500">Register is Successful.</p>
//               )}
//             </form>

//             <div className="flex items-center justify-between mt-4">
//               <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

//               <Link
//                 to="/login"
//                 className="text-xs font-bold text-gray-800 uppercase dark:text-gray-800 hover:underline"
//               >
//                 Login
//               </Link>

//               <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { imageUpload, saveUser } from "../api/utils";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();

  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    //1. send image data to imgbb
    const photoURL = await imageUpload(image);

    try {
      //2. User Registration
      const result = await createUser(email, password);

      //3. Save username & profile photo
      await updateUserProfile(name, photoURL);
      console.log(result);
      // save user info in db if the user is new
      await saveUser({ ...result?.user, displayName: name, photoURL });
      Swal.fire({
        title: "Success!",
        text: "Your account has been created successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // 6. Navigate to homepage
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
      Swal.fire({
        title: "Error!",
        text: err.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const image = form.image.files[0];

  //   try {
  //     // 1. Upload image to imgbb
  //     const photoURL = await imageUpload(image);

  //     // 2. Create user in Firebase
  //     const result = await createUser(email, password);

  //     // 3. Update user profile in Firebase
  //     await updateUserProfile(name, photoURL);

  //     // 4. Send user data to your MongoDB
  //     const userData = {
  //       name,
  //       image: photoURL,
  //       email,
  //     };
  //     await axios.post(
  //       `${import.meta.env.VITE_API_URL}/users/${email}`,
  //       userData
  //     );

  //     // 5. Success notification
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Your account has been created successfully!",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });

  //     // 6. Navigate to homepage
  //     navigate("/");
  //   } catch (err) {
  //     console.error(err);
  //     toast.error(err.message);
  //     Swal.fire({
  //       title: "Error!",
  //       text: err.message || "Something went wrong!",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   }
  // };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      await signInWithGoogle();

      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen my-10 bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Edu-Management</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                id="password"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-90 "
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-2 bottom-2"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-black"></FaEyeSlash>
                ) : (
                  <FaEye className="text-black"></FaEye>
                )}
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-blue-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
