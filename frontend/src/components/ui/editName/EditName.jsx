import React from "react";

const EditName = () => {
  const [editMode, setEditMode] = React.useState(true);

  const handleClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="edit-name-main">
      {editMode ? (
        <form className="edit-name-edit">
          <div className="edit-name-divs">
            <input
              className="edit-name-input"
              type="text"
              id="username"
              placeholder="Tony"
            />
            <input
              className="edit-name-input"
              type="password"
              id="password"
              placeholder="Jarvis"
            />
          </div>
          <div className="edit-name-divs">
            <button className="edit-name-button" onClick={handleClick}>
              Save
            </button>
            <button className="edit-name-button" onClick={handleClick}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className="edit-button" onClick={handleClick}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default EditName;
