import { Link } from "react-router-dom";
import { styles } from "../../../assets";
import { profileType, Routes } from "../../../global";
import { WelcomeName } from "../../ui";

const transactions = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: " Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

const UserContent = ({ profile }: { profile: profileType }) => {
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <WelcomeName firstName={profile.firstName} lastName={profile.lastName} />

      <h2 className={styles.srOnly}>Accounts</h2>

      {transactions.map((transaction, index) => (
        <section className={styles.account} key={index}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>{transaction.title}</h3>
            <p className={styles.accountAmount}>{transaction.amount}</p>
            <p className={styles.accountAmountDescription}>
              {transaction.description}
            </p>
          </div>

          <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
            <Link to={`${Routes.TRANSACTIONS}/${index}`}>
              <button className={styles.transactionButton}>
                View transactions
              </button>
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
};

export default UserContent;
