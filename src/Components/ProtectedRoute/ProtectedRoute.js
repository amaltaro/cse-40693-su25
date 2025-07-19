import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../Services/Credentials";
import "./ProtectedRoute.css";

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
      <div className="unauthorized-container">
        <div className="unauthorized-card">
          <div className="unauthorized-header">
            <h1 className="unauthorized-title">Unauthorized!</h1>
            <p className="unauthorized-subtitle">You need to be logged in to access this page.</p>
          </div>
          <div className="unauthorized-button-container">
            <button onClick={goBackHandler} className="unauthorized-btn">
              <i className="bi bi-arrow-left me-2"></i>
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProtectedRoute;
