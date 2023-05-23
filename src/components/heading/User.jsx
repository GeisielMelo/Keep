import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import RefreshIcon from '@mui/icons-material/Refresh';
import LoginIcon from '@mui/icons-material/Login';

function User() {
  return (
    <div className="container heading-padding">
      <button className="rounded-btn rounded" title="My Github"><GitHubIcon /></button>
      <button className="rounded-btn rounded" title="Refresh"><RefreshIcon /></button>
      <button className="rounded-btn rounded" title="Login"><LoginIcon /></button>
    </div>
  );
}

export default User;