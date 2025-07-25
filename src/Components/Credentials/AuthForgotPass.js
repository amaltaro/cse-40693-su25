import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser, changePassword } from "../../Services/Credentials";
import AuthPassForm from "./AuthPassForm";
import InfoModal from "../Modal/InfoModal";

const AuthRegister = () => {
  const navigate = useNavigate();

  const [newPass, setNewPass] = useState({
    email: "",
    password1: "",
    password2: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [formError, setFormError] = useState("");

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success");

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newPass && add) {
      changePassword(newPass)
      setAdd(false)
      setModalMessage("Success! Please check your email to proceed with password reset.");
      setModalType("success");
      setShowModal(true);
    }
  }, [navigate, newPass, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setNewPass({
      ...newPass,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormError(""); // Clear any previous errors
    setAdd(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/Auth/Login");
  };

  return (
    <div>
      <AuthPassForm 
        user={newPass}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        error={formError}>
      </AuthPassForm>

      <InfoModal
        isOpen={showModal}
        message={modalMessage}
        type={modalType}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default AuthRegister;