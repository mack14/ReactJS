import React from "react";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <div className="info">
      <img
        className="info--photo"
        src="../images/self2.jpg"
        alt="emanuele del monte"
      />
      <h1 className="info--fullname">Byomugisha Mackson</h1>
      <h5 className="info--role">Junior Front End Developer</h5>

      <div className="info--buttons">
        <address>
          <a href="https://twitter.com/Mackson_4">
            <button className="button button--email">
              <FaTwitter className="info--icon" />
              Twitter
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/emanueledelmonte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FaLinkedin className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
