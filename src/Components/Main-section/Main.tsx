import "./Main.css";
import service1 from "./../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";

const Main = () => {
  return (
    <div>
      <div className="main1">
        <p className="main-p">Our Services</p>

        <div>
          <hr />
        </div>
      </div>

      <div className="flex-container">
        <div className="service-1">
          <div>
            <img src={service1} alt="someone sitting" />
          </div>
          <h2>Web Design</h2>
          <p>
            Focus on how you can help and benefit your user. Use simple words so
            that you don't confuse people.
          </p>
        </div>

        <div className="service-2">
          {" "}
          <div>
            <img src={service2} alt="nature" />
          </div>
          <h3>Graphic Design</h3>
          <p>
            Focus on how you can help and benefit your user. Use simple words so
            that you don't confuse people.
          </p>
        </div>

        <div className="service-3">
          <div>
            <img src={service3} alt="content creation" />
          </div>
          <h1>Content Creation</h1>
          <p>
            Focus on how you can help and benefit your user. Use simple words so
            that you don't confuse people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
