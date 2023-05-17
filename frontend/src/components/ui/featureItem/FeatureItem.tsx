import React from "react";
import styles from "../../../assets/styles/App.module.css";

const FeatureItem = ({ icon, title, paragraph }: any) => (
  <div className={styles.featureItem}>
    <img src={icon} className={styles.featureIcon} alt="icon" />
    <h3 className={styles.featureItemTitle}>{title}</h3>
    <p>{paragraph}</p>
  </div>
);

export default FeatureItem;
