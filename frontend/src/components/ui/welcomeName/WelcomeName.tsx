import React, { FormEvent, useState } from "react";
import { styles } from "../../../assets";
import { editProfile } from "../../../api";
import { useAppSelector } from "../../../app/hooks";
import { getToken } from "../../../features";

const WelcomeName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const [editMode, setEditMode] = React.useState(false);
  const token = useAppSelector(getToken);
  const [credentials, setCredentials] = useState({
    firstName: firstName,
    lastName: lastName,
  });

  const handleClick = () => {
    setEditMode(!editMode);
  };

  const handleClickOnSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditMode(!editMode);
    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
    };
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const response = await editProfile(firstName, lastName, token);
    if (response.status === 200) {
      setCredentials({ firstName, lastName });
      return;
    }
  };

  return (
    <div className={styles.header}>
      {editMode ? (
        <>
          <h1>Welcome back</h1>
          <div className={styles.editNameMain}>
            <form
              className={styles.editNameEdit}
              onSubmit={(e) => handleClickOnSave(e)}
            >
              <div className={styles.editNameDivs}>
                <input
                  className={styles.editNameInput}
                  type="text"
                  id="firstName"
                  defaultValue={credentials.firstName}
                  autoFocus
                />
                <input
                  className={styles.editNameInput}
                  type="text"
                  id="lastName"
                  defaultValue={credentials.lastName}
                />
              </div>
              <div className={styles.editNameDivs}>
                <button type="submit" className={styles.editButton}>
                  Save
                </button>
                <button className={styles.editButton} onClick={handleClick}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {credentials.firstName} {credentials.lastName}!
          </h1>
          <button className={styles.editButton} onClick={handleClick}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
};

export default WelcomeName;
