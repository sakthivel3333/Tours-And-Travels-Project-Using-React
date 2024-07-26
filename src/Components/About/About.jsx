import React from "react";
import "./About.css";
import img from "../../Asset/mountain.jpg";
import img2 from "../../Asset/customers.jpg";
import img3 from "../../Asset/pexels-efe-ersoy-393937500-20157706.jpg";
import video from "../../Asset/video.mp4";

const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">Why Hikings?</h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img} alt="Mountain" />
            <h3> 100+ Mountains</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cum labore impedit tempora placeat ut saepe culpa quisquam quidem
              libero.
            </p>
          </div>
          <div className="singleItem">
            <img src={img2} alt="Customers" />
            <h3> 1000+ Hikings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cum labore impedit tempora placeat ut saepe culpa quisquam quidem
              libero.
            </p>
          </div>
          <div className="singleItem">
            <img src={img3} alt="Hiking" />
            <h3> 2000+ Customers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cum labore impedit tempora placeat ut saepe culpa quisquam quidem
              libero.
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>wonderful house experience in there</h2>
              
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                deserunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quo accusantium nobis recusandae! Illum sequi consectetur nobis ad beatae pariatur.
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
