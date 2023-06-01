import React, { useContext, useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import LoginIcon from "@mui/icons-material/Login";
import { AuthContext } from "../../../../context/auth.jsx";

function User({ onPress }) {
  const { logout } = useContext(AuthContext);
  const [rotation, setRotation] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const handleRefresh = () => {
    setRotation(true);
    setTimeout(() => {
      onPress();
      setRotation(false);
    }, 1000);
  };

  return (
    <div className="container heading-padding">
      <button
        className={rotation ? "rounded-btn image" : "rounded-btn"}
        title="Refresh"
        onClick={handleRefresh}
      >
        <SyncIcon />
      </button>
      <button className="rounded-btn" title="Login" onClick={handleLogout}>
        <LoginIcon />
      </button>
    </div>
  );
}

export default User;
