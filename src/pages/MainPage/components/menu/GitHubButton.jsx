import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
// import { Link } from "react-router-dom";

function GitHubButton() {
  const [expanded, setExpanded] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setExpanded(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setExpanded(false);
  };

  return (
    <a
      className="git-btn"
      title="Github"
      href="https://github.com/GeisielMelo"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <GitHubIcon />
      {expanded && <p>Git</p>}
    </a>
  );
}

export default GitHubButton;
