import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../Services/Credentials";

// You can pass props using the spread operator to throw them on an object
// if there are too many to break out
const ProtectedRoute = ({ element, ...rest }) => {
  console.log("element: ", element);
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/auth");
  };

  if (checkUser()) {
    return element;
  } else {
    return (
      <div>
        <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
      </div>
    );
  }
};

export default ProtectedRoute;
