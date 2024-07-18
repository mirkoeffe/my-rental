import Berlin from "../assets/berlin.jpeg";
import "../App.css";

function About() {
  return (
    <div className="about-main">
      <h1 className="about-header">myRental</h1>
      <div className="about-main-container">
        <img src={Berlin} alt="Berlin" />
        <p>
          <strong>myRental</strong>, your premier destination for finding the
          perfect rental apartment in Berlin, Madrid, and Paris. Our mission is
          to make your apartment search effortless, providing you with a curated
          selection of the finest properties in these vibrant cities. Whether
          you are relocating for work, study, or simply seeking a new adventure,
          myRental offers a diverse range of options tailored to meet your
          needs.
        </p>
      </div>
    </div>
  );
}

export default About;
