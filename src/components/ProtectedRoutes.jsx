import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, user }) {
  return;
  if (user) {
    return children;
  } else {
    return <Navigate to="/singup" />;
  }
}

export default ProtectedRoutes;
