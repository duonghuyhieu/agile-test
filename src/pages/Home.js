import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Logo from "../components/logo/logo";
import { Image } from "../assets";
import FeatureDetail from "../components/featureDetail/featureDetail";
function Home() {
  return (
    <div>
      <div className="home-wrapper">
        <div className="header">
          <div>
            <Logo></Logo>
          </div>
          <div>
            <Link className="header-button" to="/login">
              Sign in
            </Link>
          </div>
        </div>
        <div className="intro">
          <div className="intro-wrapper">
            <h1 className="intro-wrapper-heading heading">
              Save your data storage here.
            </h1>
            <p className="intro-wrapper-text text">
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <div className="intro-wrapper-button">
              <p>Learn more</p>
            </div>
            <div className="intro-img">
              <img src={Image.img1} alt=""></img>
            </div>
          </div>
        </div>
        <div className="feature">
          <h1 className="feature-heading heading">Features</h1>
          <p className="feature-text text">
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
          <div className="feature-content">
            <FeatureDetail />
          </div>
        </div>
        <div className="testimonials">
          <h1 className="testimonials-heading">Testimonials</h1>
          <div className="testimonials-main">
            <img src={Image.arrowleft} alt=""></img>
            <div className="testimonials-main-info">
              <img
                src={Image.avatar}
                alt=""
                className="testimonials-main-info-avatar "></img>
              <div className="testimonials-main-info-des">
                <h2>John Fang</h2>
                <h3>wordfaang.com</h3>
                <p>
                  Suspendisse ultrices at diam lectus nullam.
                  <br /> Nisl, sagittis viverra enim erat tortor ultricies
                  <br /> massa turpis. Arcu pulvinar aenean nam laoreet <br />
                  nulla.
                </p>
              </div>
            </div>
            <img src={Image.arrowright} alt=""></img>
          </div>
          <div className="testimonials-select">
            <img src={Image.select} alt=""></img>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-on">
          <div className="footer-info">
            <div className="footer-info-ava">
              <Logo />
              <h1>DataWarehouse</h1>
            </div>
            <h3>
              Warehouse Society, 234 <br />
              Bahagia Ave Street PRBW 29281
            </h3>
            <h4>
              info@warehouse.project <br />
              1-232-3434 (Main)
            </h4>
          </div>
          <div className="footer-about">
            <h2 className="footer-heading">About</h2>
            <ul className="footer-list">
              <li>Profile</li>
              <li>Feature</li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
          </div>
          <div className="footer-help">
            <h2 className="footer-heading">Help</h2>
            <ul className="footer-list">
              <li>Support</li>
              <li>Sign up</li>
              <li>Guide</li>
              <li>Report</li>
              <li>Q&A</li>
            </ul>
          </div>
          <div className="footer-social">
            <h2 className="footer-heading">Social Media</h2>
            <div className="footer-img">
              <img src={Image.socialava} alt=""></img>
              <img src={Image.socialava} alt=""></img>
              <img src={Image.socialava} alt=""></img>
            </div>
          </div>
        </div>
        <div className="footer-under">
          <p>
            © Datawarehouse™, 2020. All rights reserved. <br />
            Company Registration Number: 21479524.
          </p>
          <img src={Image.chat} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
