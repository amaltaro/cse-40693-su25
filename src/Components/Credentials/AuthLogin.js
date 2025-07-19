import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser, loginUser } from "../../Services/Credentials";
import AuthForm from "./AuthForm";
import InfoModal from "../Modal/InfoModal";

const AuthLogin = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState(false);
  const [formError, setFormError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (checkUser()) {
      setIsAlreadyLoggedIn(true);
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (currentUser && add && !isAlreadyLoggedIn) {
      loginUser(currentUser)
        .then((userLoggedIn) => {
          if (userLoggedIn) {
            setSuccessMessage(`${userLoggedIn.get("firstName")}, you successfully logged in!`);
            setShowSuccessModal(true);
          }
          setAdd(false);
        })
        .catch((error) => {
          // Show error message directly in the form

          // Use generic error message for security
          let errorMessage = "Login failed. Please check your credentials and try again.";
          if (error.message && error.message.includes("Invalid username/password")) {
            errorMessage = "Invalid email or password. Please try again.";
          } else if (error.message) {
            errorMessage = error.message;
          }

          setFormError(errorMessage);
          console.error("Login failed:", error);
          setAdd(false);
        });
    }
  }, [navigate, currentUser, add, isAlreadyLoggedIn]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted: ", e.target);
    setFormError(""); // Clear any previous errors
    setAdd(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  return (
    <div>
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        error={formError}
      />
      <InfoModal
        isOpen={showSuccessModal}
        message={successMessage}
        type="success"
        onClose={handleSuccessModalClose}
      />
    </div>
  );
};

export default AuthLogin;
