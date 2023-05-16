import React, { useState } from "react";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import Transaction from "../ui/transaction/Transaction";
import getToken from "../../api/login";

const Transactions = () => {
  return (
    <>
      <Header />

      <main className="main bg-dark">
        <section className="transactions-title">
          <h2>Argent Bank Checking (x8349)</h2>
          <h1>$2089,79</h1>
          <h3>Available balance</h3>
        </section>

        <section className="transaction-array">
          <div className="transaction-array-titles">
            <h4></h4>
            <h4 className="transaction-array-title">Date</h4>
            <h4 className="transaction-array-title">Description</h4>
            <h4 className="transaction-array-title">Amount</h4>
            <h4 className="transaction-array-title">Balance</h4>
          </div>
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Transactions;
