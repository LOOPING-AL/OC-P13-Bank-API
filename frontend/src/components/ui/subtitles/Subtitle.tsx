import React from "react";
import { styles } from "../../../assets";

const Subtitle = ({ subtitle }: { subtitle: string }) => (
  <p className={styles.subtitle}>{subtitle}</p>
);

export default Subtitle;
