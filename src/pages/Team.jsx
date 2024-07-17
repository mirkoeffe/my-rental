import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ProfilePic from "../assets/mirko.png";
import "../App.css";

function Team() {
  return (
    <div className="about-main">
      <h1 className="about-header">Team</h1>
      <img src={ProfilePic} alt="Mirko Fede" className="team-img" />
      <h2>Mirko Fede</h2>
      <p>Developer</p>

      <a
        href="https://github.com/mirkoeffe/my-rental"
        className="footer-link"
        target="_blank"
      >
        <FaGithub className="team-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/mirko-fede/"
        className="footer-link"
        target="_blank"
      >
        <FaLinkedin className="team-icon" />
      </a>
    </div>
  );
}

export default Team;
