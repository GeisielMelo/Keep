import React, { useContext } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import LoginIcon from "@mui/icons-material/Login";
import { AuthContext } from "../../../../context/auth.jsx";

function User({ onPress }) {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container heading-padding">
      <button className="rounded-btn" title="Refresh" onClick={onPress}>
        <SyncIcon />
      </button>
      <button className="rounded-btn" title="Login" onClick={handleLogout}>
        <LoginIcon />
      </button>
    </div>
  );
}

export default User;
