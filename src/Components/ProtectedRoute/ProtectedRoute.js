import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../Services/Credentials";

// You can pass props using the spread operator to throw them on an object
// if there are too many to break out
const ProtectedRoute = ({ element, ...rest }) => {
  console.log("element: ", element);
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkUser()) {
      // Automatically redirect unauthenticated users to auth page
      navigate("/auth");
    }
  }, [navigate]);

  // Only render the protected element if user is authenticated
  if (checkUser()) {
    return element;
  } else {
    // Return null while redirecting to prevent flash of unauthorized content
    return null;
  }
};

export default ProtectedRoute;
