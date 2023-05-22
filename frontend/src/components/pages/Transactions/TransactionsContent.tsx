import { styles } from "../../../assets";
import transactions from "../../../assets/data/transactions";
import { Transaction } from "../../ui";

const TransactionsContent = () => (
  <main className={`${styles.main} ${styles.bgDark}`}>
    <section className={styles.transactionsTitle}>
      <h2>Argent Bank Checking (x8349)</h2>
      <h1>$2089,79</h1>
      <h3>Available balance</h3>
    </section>

    <section className={styles.transactionArray}>
      <div className={styles.transactionArrayTitles}>
        <h4 className={styles.transactionArrayTitle}>Date</h4>
        <h4 className={styles.transactionArrayTitle}>Description</h4>
        <h4 className={styles.transactionArrayTitle}>Amount</h4>
        <h4 className={styles.transactionArrayTitle}>Balance</h4>
      </div>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} />
      ))}
    </section>
  </main>
);

export default TransactionsContent;
