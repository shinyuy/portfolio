import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Hello! My name is Shinyuy Marcel</h1>
        <p>I create web and mobile apps</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/shinyuy-marcel-fonyuy-710a38169/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/shinyuy" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://twitter.com/Shinyuy3" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://youtube.com" target="_blank">
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
