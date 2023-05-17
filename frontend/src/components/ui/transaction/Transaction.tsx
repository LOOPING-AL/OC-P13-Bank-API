import { useState } from "react";
import { iconDownChevron, iconPencil } from "../../../assets";
import styles from "../../../assets/styles/App.module.css";

const Transaction = () => {
  const [openSummary, setOpenSummary] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const [category, setCategory] = useState("Food");
  const [notes, setNotes] = useState("");

  const handleClickSummary = () => setOpenSummary(!openSummary);
  const handleClickCategory = () => setOpenCategory(!openCategory);
  const handleClickNotes = () => setOpenNotes(!openNotes);
  const handleChangeNotes = (e: React.FormEvent<HTMLInputElement>) =>
    setNotes(e.currentTarget.value);
  const handleChangeCategory = (e: React.FormEvent<HTMLSelectElement>) =>
    setCategory(e.currentTarget.value);

  return (
    <details className={styles.transaction} open>
      <summary
        className={styles.transactionSummary}
        onClick={handleClickSummary}
      >
        <div className={styles.transactionContentChevron}>
          <img
            src={iconDownChevron}
            alt="chevron"
            className={`${styles.transactionImgChevron}  ${
              openSummary && styles.transactionImgChevronClose
            }`}
          />
        </div>
        <p className={styles.transactionInfo}>June 20th, 2020</p>
        <p className={styles.transactionInfo}>June 20th, 2020</p>
        <p className={styles.transactionInfo}>June 20th, 2020</p>
        <p className={styles.transactionInfo}>June 20th, 2020</p>
      </summary>
      <div className={styles.transactionBottom}>
        <p>Transactions Types: Electronic</p>
        <p>
          Categorie:
          {!openCategory ? (
            category
          ) : (
            <select
              name="cars"
              id="cars"
              onChange={(e) => handleChangeCategory(e)}
              defaultValue={category}
            >
              <option value="volvo">Food</option>
              <option value="mercedes">Health</option>
              <option value="audi">Housing</option>
              <option value="saab">Shopping</option>
              <option value="audi">Transports</option>
            </select>
          )}
          <img
            src={iconPencil}
            alt="icon pencil"
            className={styles.iconPencil}
            onClick={handleClickCategory}
          />
        </p>

        <p>
          Notes:
          <img
            src={iconPencil}
            alt="icon pencil"
            className={styles.iconPencil}
            onClick={handleClickNotes}
          />
        </p>
        <p>
          {!openNotes ? (
            notes
          ) : (
            <input
              type="text"
              defaultValue={notes}
              onChange={(e) => handleChangeNotes(e)}
            />
          )}
        </p>
      </div>
    </details>
  );
};

export default Transaction;
