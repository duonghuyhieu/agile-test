import React from "react";
import { Image } from "../../assets";
import "./featureDetail.scss";
function featureDetail() {
  return (
    <div className="detail">
      <div>
        <img src={Image.background} alt="" className="detail-background"></img>
      </div>
    </div>
  );
}

export default featureDetail;
