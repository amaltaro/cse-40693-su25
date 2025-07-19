import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser, getUser, logoutUser } from "../../Services/Credentials";
import InfoModal from "../Modal/InfoModal";
import "./AuthLogout.css";

const AuthLogout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("loading");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const performLogout = async () => {
      if (checkUser()) {
        const currentUser = getUser();
        setIsLoggingOut(true);
        setModalMessage("Logging out...");
        setModalType("loading");
        setShowModal(true);

        try {
          await logoutUser(currentUser);

          // Update modal to show success
          setModalMessage("You have been successfully logged out.");
          setModalType("success");
          setIsLoggingOut(false);
        } catch (error) {
          console.error("Logout error:", error);
          setModalMessage("There was an issue logging out. Please try again.");
          setModalType("error");
          setIsLoggingOut(false);
        }
      } else {
        setModalMessage("You are not logged in and you should not be in the logout page");
        setModalType("error");
        setShowModal(true);
      }
    };

    performLogout();
  }, [navigate]);

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/auth");
  };

  return (
    <div>
      <InfoModal
        isOpen={showModal}
        message={modalMessage}
        type={modalType}
        onClose={handleModalClose}
        isLoading={isLoggingOut}
      />
    </div>
  );
};

export default AuthLogout;
