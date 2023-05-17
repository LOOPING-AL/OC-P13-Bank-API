import React from "react";
import styles from "../../../assets/styles/App.module.css";

const Subtitle = ({ subtitle }: { subtitle: string }) => (
  <p className={styles.subtitle}>{subtitle}</p>
);

export default Subtitle;
