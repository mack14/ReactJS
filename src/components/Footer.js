import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/mack14"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="footer--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/byomugisha-mackson-70298116a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="footer--icon" />
      </a>
    </div>
  );
}
