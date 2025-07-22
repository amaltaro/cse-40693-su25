import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { checkUser, changePassword } from "../../Services/Credentials";
import AuthPassForm from "./AuthPassForm";

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
      alert(`Success! Please check your email to proceed with password reset.`);
      navigate("/Auth/Login");
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

  return (
    <div>
      <AuthPassForm 
        user={newPass}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
        error={formError}>
      </AuthPassForm>
    </div>
  );
};

export default AuthRegister;