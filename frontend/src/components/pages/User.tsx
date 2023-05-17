import React from "react";
import Footer from "../ui/footer/Footer";
import EditName from "../ui/editName/EditName";
import Header from "../ui/header/Header";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/App.module.css";

const User = () => (
  <>
    <Header />
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <EditName />
      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Checking (x8349)</h3>
          <p className={styles.accountAmount}>$2,082.79</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <Link to={`/transactions/12`}>
            <button className={styles.transactionButton}>
              View transactions
            </button>
          </Link>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContenWwrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
          <p className={styles.accountAmount}>$10,928.42</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>
            View transactions
          </button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>
            Argent Bank Credit Card (x8349)
          </h3>
          <p className={styles.accountAmount}>$184.30</p>
          <p className={styles.accountAmountDescription}>Current Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>
            View transactions
          </button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default User;
