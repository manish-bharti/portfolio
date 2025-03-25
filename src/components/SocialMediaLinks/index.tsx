import React from "react";
import "./SocialMediaLinksStyle.scss";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="social-media-links">
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={16} />
      </a>
      <a
        href="https://github.com/manish-bharti"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={16} />
      </a>
      <a
        href="https://www.linkedin.com/in/manish-bharti-a94508194/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={16} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
