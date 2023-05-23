import React from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import LoginIcon from '@mui/icons-material/Login';

function User() {
  return (
    <div className="container heading-padding">
      <button className="rounded-btn rounded" title="Refresh"><RefreshIcon /></button>
      <button className="rounded-btn rounded" title="Login"><LoginIcon /></button>
    </div>
  );
}

export default User;