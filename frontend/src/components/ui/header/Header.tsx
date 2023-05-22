import { Link } from "react-router-dom";
import { argentBankLogo, iconExit, styles } from "../../../assets";
import { Routes } from "../../../global";

const Header = () => (
  <nav className={styles.mainNav}>
    <Link className={styles.mainNavLogo} to={Routes.HOME}>
      <img
        className={styles.mainNavLogoImage}
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className={`${styles.srOnly}`}>Argent Bank</h1>
    </Link>

    <Link to={Routes.SIGNIN} className={styles.headerRight}>
      <img src={iconExit} className={styles.headerLogo} alt="icon exit" />
      Sign In
    </Link>
  </nav>
);
export default Header;
