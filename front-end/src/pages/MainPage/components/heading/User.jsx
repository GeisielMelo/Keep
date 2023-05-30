import React from "react";
import SyncIcon from "@mui/icons-material/Sync";
import LoginIcon from "@mui/icons-material/Login";

function User({ onLogout }) {
  return (
    <div className="container heading-padding">
      <button className="rounded-btn" title="Refresh">
        <SyncIcon />
      </button>
      <button className="rounded-btn" title="Login" onClick={onLogout}>
        <LoginIcon />
      </button>
    </div>
  );
}

export default User;
