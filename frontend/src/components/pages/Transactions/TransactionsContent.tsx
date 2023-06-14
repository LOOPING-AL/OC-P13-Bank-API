import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { styles, transactions } from "../../../assets";
import { getToken } from "../../../features";
import { Transaction } from "../../ui";
import { Routes } from "../../../global";

const arrayColumns = ["Date", "Description", "Amount", "Balance"];

const TransactionsContent = () => {
  const token = useAppSelector(getToken);

  return (
    <>
      {token ? (
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
      ) : (
        <Navigate to={Routes.LOGIN} />
      )}
    </>
  );
};

export default TransactionsContent;
