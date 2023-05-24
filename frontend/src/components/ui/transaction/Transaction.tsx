import { useState } from "react";
import { iconDownChevron, styles, categories } from "../../../assets";
import { transactionType } from "../../../global";
import ImgSavePencil from "../imgSavePencil/ImgSavePencil";

const Transaction = ({ transaction }: { transaction: transactionType }) => {
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
    <details className={styles.transaction}>
      <summary
        className={styles.transactionSummary}
        onClick={handleClickSummary}
      >
        <div className={styles.transactionContentChevron}>
          <img
            src={iconDownChevron}
            alt="chevron"
            className={`${styles.transactionImgChevron}  ${
              !openSummary && styles.transactionImgChevronClose
            }`}
          />
        </div>

        <p className={styles.transactionInfo}>{transaction.date}</p>
        <p className={styles.transactionInfo}>{transaction.description}</p>
        <p className={styles.transactionInfo}>${transaction.amount}</p>
        <p className={styles.transactionInfo}>${transaction.balance}</p>
      </summary>

      <div className={styles.transactionBottom}>
        <p>Transactions Types: Electronic</p>

        <div className={styles.transactionForm}>
          Categorie:
          <ImgSavePencil open={openCategory} handle={handleClickCategory} />
          {!openCategory ? (
            category
          ) : (
            <select
              name="cars"
              id="cars"
              onChange={(e) => handleChangeCategory(e)}
              defaultValue={category}
            >
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          )}
        </div>

        <div className={styles.transactionForm}>
          Notes:
          <ImgSavePencil open={openNotes} handle={handleClickNotes} />
          <div>
            {!openNotes ? (
              notes
            ) : (
              <input
                className={styles.transactionInput}
                type="text"
                defaultValue={notes}
                onChange={(e) => handleChangeNotes(e)}
              />
            )}
          </div>
        </div>
      </div>
    </details>
  );
};

export default Transaction;
