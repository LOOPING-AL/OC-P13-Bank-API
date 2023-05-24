import { styles, transactions } from "../../../assets";
import { Transaction } from "../../ui";

const arrayColumns = ["Date", "Description", "Amount", "Balance"];

const TransactionsContent = () => (
  <main className={`${styles.main} ${styles.bgDark}`}>
    <section className={styles.transactionsTitle}>
      <h2>Argent Bank Checking (x8349)</h2>
      <h1>$2089,79</h1>
      <h3>Available balance</h3>
    </section>

    <section className={styles.transactionArray}>
      <div className={styles.transactionArrayTitles}>
        {arrayColumns.map((colomn, index) => (
          <h4 key={index} className={styles.transactionArrayTitle}>
            {colomn}
          </h4>
        ))}
      </div>

      {transactions.map((transaction, index) => (
        <Transaction transaction={transaction} key={index} />
      ))}
    </section>
  </main>
);

export default TransactionsContent;
