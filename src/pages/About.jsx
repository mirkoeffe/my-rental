import Navbar from "../components/Navbar/index.jsx";
import Berlin from "../assets/berlin.jpeg";
import "../App.css";

function About() {
  return (
    <div className="about-main">
      <Navbar />
      <h1 className="about-header">myRental</h1>
      <div className="about-main-container">
        <img src={Berlin} alt="Berlin" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas
          sunt exercitationem illo nobis minus, fugiat id, optio, error itaque
          minima at. Earum ea, maxime, pariatur dicta fuga fugiat dignissimos
          illo temporibus omnis provident a, veniam facilis beatae ratione
          voluptate sunt dolorum nam. Harum dignissimos quaerat placeat. Sint,
          quibusdam deleniti.
        </p>
      </div>
    </div>
  );
}

export default About;
