import { iconSave, iconPencil, styles } from "../../../assets";

const ImgSavePencil = ({
  open,
  handle,
}: {
  open: boolean;
  handle: () => void;
}) => (
  <img
    src={open ? iconSave : iconPencil}
    alt={open ? "iconSave" : "iconPencil"}
    className={styles.transactionIcon}
    onClick={handle}
  />
);
export default ImgSavePencil;
