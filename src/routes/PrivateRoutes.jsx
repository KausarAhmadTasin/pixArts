import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="flex justify-center">
        <span className="w-16 min-h-screen bg-blue-600 flex justify-center items-center loading loading-ring "></span>
      </div>
    );

  if (user) return children;

  return <Navigate to="/login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
