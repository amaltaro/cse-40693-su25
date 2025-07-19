import React, { useEffect, useState } from "react";
import { checkUser, getUser } from "../../Services/Credentials";
import { useNavigate } from "react-router-dom";
import "./ProfileMenu.css";


const ProfileMenu = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkUser()) {
      setUser(getUser());
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    navigate("/auth/logout");
  };

  const handleLogin = () => {
    navigate("/auth/login");
  };

  return (
        user ? (
        <div className="profile-menu-container">
          <div className="profile-welcome-row">
            <span className="profile-welcome">Welcome, {user.get("firstName") || user.get("email")}</span>
          </div>
          <div className="profile-button-row">
            <button onClick={handleLogout} className="profile-btn profile-btn-logout">
              <i className="bi bi-box-arrow-left me-1"></i>
              Logout
            </button>
          </div>
        </div>
    ) : (
        <div className="profile-menu-container">
          <button onClick={handleLogin} className="profile-btn profile-btn-login">
            <i className="bi bi-box-arrow-in-right me-1"></i>
            Login
          </button>
        </div>
    )
  );
};

export default ProfileMenu;