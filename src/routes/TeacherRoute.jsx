import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";

const TeacherRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;
  if (role === "teacher") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

TeacherRoute.propTypes = {
  children: PropTypes.element,
};

export default TeacherRoute;
