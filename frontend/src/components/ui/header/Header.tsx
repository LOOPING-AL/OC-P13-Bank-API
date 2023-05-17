import { Link } from "react-router-dom";
import { argentBankLogo, iconExit } from "../../../assets";
import styles from "../../../assets/styles/App.module.css";

const Header = () => (
  <nav className={styles.mainNav}>
    <Link className={styles.mainNavLogo} to="/home">
      <img
        className={styles.mainNavLogoImage}
        src={argentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className={`${styles.srOnly}`}>Argent Bank</h1>
    </Link>

    <Link to={"/sign-in"} className={styles.headerRight}>
      <img src={iconExit} className={styles.headerLogo} alt="icon exit" />
      Sign In
    </Link>
  </nav>
);
export default Header;
