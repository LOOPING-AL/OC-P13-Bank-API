import React from "react";

const FeatureItem = ({ icon, title, paragraph }) => (
  <div className="feature-item">
    <img src={icon} className="feature-icon" alt="icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{paragraph}</p>
  </div>
);

export default FeatureItem;
