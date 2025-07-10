import React, { useEffect, useState } from "react";
import { checkUser, getUser, logoutUser } from "../../Services/Credentials";
import { useNavigate } from "react-router-dom";

const AuthLogout = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });


  useEffect(() => {
    if (checkUser()) {
      const currentUser = getUser();
      alert("User " + currentUser.get("email") + " is going to be logged out");
      logoutUser(currentUser);
      navigate("/");
    }
    else {
      alert("You are not logged in and you should not be in the logout page");
      navigate("/");
    }
  }, [navigate]);


  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default AuthLogout;
