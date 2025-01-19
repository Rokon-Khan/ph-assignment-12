import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";

import Error from "../components/Error";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-up",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <DashboardLayout />
      // <PrivateRoute>
      // </PrivateRoute>
    ),
    children: [
      // {
      //   index: true,
      //   element: (
      //     <PrivateRoute>
      //       <Statistics />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'add-plant',
      //   element: (
      //     <PrivateRoute>
      //       <AddPlant />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'my-inventory',
      //   element: (
      //     <PrivateRoute>
      //       <MyInventory />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'manage-users',
      //   element: (
      //     <PrivateRoute>
      //       <ManageUsers />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'profile',
      //   element: (
      //     <PrivateRoute>
      //       <Profile />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'my-orders',
      //   element: (
      //     <PrivateRoute>
      //       <MyOrders />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'manage-orders',
      //   element: <ManageOrders />,
      // },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export { router };
