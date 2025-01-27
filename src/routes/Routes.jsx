import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layout/MainLayout";

import Error from "../components/Error";
import DashboardLayout from "../layout/DashboardLayout";
import ApprovedClassesPage from "../pages/ApprovedClassesPage";
import ClassDetails from "../pages/ClassDetails";
import AllClassesTable from "../pages/Dashboard/Admin/AllClassesTable";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import UsersTable from "../pages/Dashboard/Admin/UsersTable";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import ManageOrders from "../pages/Dashboard/Seller/ManageOrders";
import MyInventory from "../pages/Dashboard/Seller/MyInventory";
import AddClass from "../pages/Dashboard/Teacher/AddClass";
import MyClasses from "../pages/Dashboard/Teacher/MyClasses";
import UpdateClass from "../pages/Dashboard/Teacher/UpdateClass";
import EnrolledClasses from "../pages/EnrolledClasses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PaymentPage from "../pages/PaymentPage";
import Register from "../pages/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import TeacherRoute from "./TeacherRoute";

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
        path: "/allclases",
        element: <ApprovedClassesPage></ApprovedClassesPage>,
      },
      {
        path: "/classdetails/:id",
        element: (
          <PrivateRoute>
            <ClassDetails></ClassDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <PaymentPage></PaymentPage>
          </PrivateRoute>
        ),
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
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <AddClass></AddClass>
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <MyClasses></MyClasses>
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-class/:id",
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <UpdateClass></UpdateClass>
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-inventory",
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-classes",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllClassesTable />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "my-enroll-classes",
        element: (
          <PrivateRoute>
            <EnrolledClasses></EnrolledClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageOrders />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UsersTable />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "manage-orders",
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
