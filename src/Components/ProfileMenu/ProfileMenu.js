import React, { useEffect, useState } from "react";
import { checkUser, getUser } from "../../Services/Credentials";
import { useNavigate } from "react-router-dom";


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
        <div>
          <span>Welcome, {user.get("firstName") || user.get("email")}</span>
          <button onClick={handleLogout} style={{ marginLeft: 10 }}>Logout</button>
        </div>
    ) : (
        <button onClick={handleLogin}>Login</button>
    )
  );
};

export default ProfileMenu;