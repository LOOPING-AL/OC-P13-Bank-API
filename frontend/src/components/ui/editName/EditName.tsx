import React from "react";
import styles from "../../../assets/styles/App.module.css";

const EditName = () => {
  const [editMode, setEditMode] = React.useState(true);

  const handleClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={styles.editNameMain}>
      {editMode ? (
        <form className={styles.editNameEdit}>
          <div className={styles.editNameDivs}>
            <input
              className={styles.editNameInput}
              type="text"
              id="username"
              placeholder="Tony"
            />
            <input
              className={styles.editNameInput}
              type="password"
              id="password"
              placeholder="Jarvis"
            />
          </div>
          <div className={styles.editNameDivs}>
            <button className={styles.editNameButton} onClick={handleClick}>
              Save
            </button>
            <button className={styles.editNameButton} onClick={handleClick}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className={styles.editButton} onClick={handleClick}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default EditName;
