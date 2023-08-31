import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="../../../public/logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to alive for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span>145 New york, FL 4571, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
