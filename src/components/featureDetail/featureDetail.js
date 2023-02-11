import React from "react";
import "./featureDetail.scss";
import { Image } from "../../assets";
const featureDetail = (props) => {
  return (
    <div className="detail">
      <img src={props.ava} alt="" className="detail-ava"></img>
      <div className="detail-content">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <div>
          <img src={Image.learnmore} alt=""></img>
        </div>
        <img src={props.bg} alt="" className="detail-background"></img>
      </div>
    </div>
  );
};

export default featureDetail;
