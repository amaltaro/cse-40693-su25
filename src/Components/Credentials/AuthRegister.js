import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser, createUser } from "../../Services/Credentials";
import AuthForm from "./AuthForm";
import InfoModal from "../Modal/InfoModal";

const AuthRegister = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [formError, setFormError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    // checkUser() ? history.push("/home"): null;
    if (newUser && add) {
      createUser(newUser)
        .then((userCreated) => {
          if (userCreated) {
            setSuccessMessage(`${userCreated.get("firstName")}, you successfully registered!`);
            setShowSuccessModal(true);
          }
          setAdd(false);
        })
        .catch((error) => {
          // Show error message directly in the form
          console.log("About to show form error:", error.message);

          // Use generic error message for security
          let errorMessage = "Registration failed. Please try again.";
          if (error.message && error.message.includes("already exists")) {
            errorMessage = "An account already exists for this username or email address.";
          } else if (error.message) {
            errorMessage = error.message;
          }

          setFormError(errorMessage);
          console.error("Registration failed:", error);
          setAdd(false);
        });
    }
  }, [navigate, newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setNewUser({
      ...newUser,
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
        user={newUser}
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

export default AuthRegister;
