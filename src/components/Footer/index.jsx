import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./styles.css";

function Footer() {
  const today = new Date();
  return (
    <div className="footer">
      <a
        href="https://github.com/mirkoeffe/my-rental"
        className="footer-link"
        target="_blank"
      >
        <FaGithub className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/mirko-fede/"
        className="footer-link"
        target="_blank"
      >
        <FaLinkedin className="footer-icon" />
      </a>

      <p>
        Developed by{" "}
        <a
          href="https://www.mirkoeffe.shop"
          className="footer-link"
          target="_blank"
        >
          Mirko Fede
        </a>
      </p>
      <p>&copy; {today.getFullYear()} myRental. All rights reserved.</p>
    </div>
  );
}

export default Footer;
