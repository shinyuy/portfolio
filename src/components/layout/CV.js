import CV1 from "../../images/CV.jpg";
import "./cv.css";

const CV = ({ theme }) => {
  return (
    <div className="cv-container">
      <a href="../../images/shinyuy marcel.pdf" download>
        Click to download CV
      </a>
      <img src={theme === "light" ? CV1 : CV1} />
    </div>
  );
};
export default CV;
