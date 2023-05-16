import React from "react";
import { iconDownChevron } from "../../../assets";

const Transaction = () => {
  return (
    <details className="transaction">
      <summary className="transaction-summary">
        <img
          src={iconDownChevron}
          alt="chevron"
          className="transaction-chevron"
        />
        <p>
          I have keys but no doors. I have space but no room. You can enter but
          can’t leave. What am I?
        </p>
      </summary>
      A keyboard.
    </details>
  );
};

export default Transaction;
