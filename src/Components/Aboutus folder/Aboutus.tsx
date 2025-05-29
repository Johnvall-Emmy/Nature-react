import React from "react";
import leaf from "../../assets/leaf.jpg";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div>
      <section className="about-us">
        <div className="flex-about-us">
          <div>
            <h1>About Us</h1>

            <h4>
              Tell website visitors who you are and why they should choose your
              business.
            </h4>

            <p>
              Because when a visitor first lands on your website, you’re a
              stranger to them. They have to get to know you in order to want to
              read your blog posts, subscribe to your email newsletter, or buy
              what you’re selling.
            </p>

            <button>Find Out More</button>
          </div>
          <div className="image-leaf">
            <img src={leaf} alt="leaf" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
