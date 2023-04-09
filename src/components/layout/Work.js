import boookit from "../../images/boookit.png";
import financica from "../../images/financica.jpg";
import interviewlook from "../../images/interviewlook.jpg";
import wokedspaces from "../../images/wokedspaces.jpg";
import "./work.css";

const Work = ({ theme }) => {
  console.log(theme);
  return (
    <div className="work-container">
      <h1>Work Experience</h1>
      <div className="work-container-content">
        <div className="year">
          <h2>2022 - 2023</h2>
        </div>
        <div className="details">
          <h2>Full Stack Web Developer</h2>
          <a href="https://boookit.io/">Boookit</a>
          <p>
            Built a platform to make reservations at hotels,
            restaurants and clubs easier
          </p>
          <span className="tags">
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              NextJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              React Native
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              NodeJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              ExpressJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              PostgreSQL
            </span>
          </span>
          <img src={boookit} alt="" />
        </div>
      </div>
      <div className="work-container-content">
        <div className="year">
          <h2>2021 - 2022</h2>
        </div>
        <div className="details">
          <h2>Frontend Web Developer</h2>
          <a href="https://financica.dev/">Financica</a>
          <p>
            Built the front end part of Financica, a
            bookkeeping(accounting) application using NextJS and
            TypeScript on the front end, with backend build with
            Python, Django, and Postgres.
          </p>
          <span className="tags">
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              NextJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              TypeScript
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              Python
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              Django
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              PostgreSQL
            </span>
          </span>
          <img src={financica} alt="" />
        </div>
      </div>
      <div className="work-container-content">
        <div className="year">
          <h2>2022 - present</h2>
        </div>
        <div className="details">
          <h2>Full Stack Web Developer</h2>
          <a href="https://www.wokedspaces.com">Woked Spaces</a>
          <p>
            Woked Spaces a platform where space owners(host) can list
            their space for workers(guests) looking for workspaces to
            book and make payments Designed by myself using Figma,
            coded the frontend with NextJS, the backend with NodeJS,
            ExpressJS, and PostgreSQL database, and Deployed on Heroku
          </p>
          <span className="tags">
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              NextJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              NodeJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              ExpressJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              PostgreSQL
            </span>
          </span>
          <img src={wokedspaces} alt="" />
        </div>
      </div>
      <div className="work-container-content">
        <div className="year">
          <h2>2020 - 2021</h2>
        </div>
        <div className="details">
          <h2>Frontend Web Developer</h2>
          <a href="https://www.interviewlook.com/">Interview Look</a>
          <p>
            Worked on the frontend of Interview Look, a human resource
            platform, created with React, TypeScript and MobX,
          </p>
          <span className="tags">
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              ReactJS
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              TypeScript
            </span>
            <span
              className={
                theme === "light" ? "light-span" : "dark-span"
              }
            >
              MobX
            </span>
          </span>

          <img src={interviewlook} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Work;
