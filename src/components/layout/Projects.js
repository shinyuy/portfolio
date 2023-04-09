import hotel from "../../images/hotel.jpeg";
import hotelios from "../../images/hotelios.png";
import hotels from "../../images/hotels.jpg";
import hotelsios from "../../images/hotelsios.png";
import restaurants from "../../images/restaurants.jpeg";
import snackios from "../../images/snackios.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="prodjects-container">
      <h1>My Projects</h1>
      <div className="project">
        <h2>Boookit</h2>
        <p>
          A mobile app that permits hotel, restaurants and club owners
          to manage their business by given them the possibility to
          add and receive bookings for their rooms, meals and spaces
          respectively from clients, who themselves have the
          possibility of booking the services online through Boookit.
        </p>
        <div className="images-container">
          <img src={snackios} />
          <img src={restaurants} />
          <img src={hotels} />
          <img src={hotel} />
          <img src={hotelsios} />
          <img src={hotelios} />
        </div>
      </div>
    </div>
  );
};
export default Projects;
