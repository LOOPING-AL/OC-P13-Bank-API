import { Link } from "react-router-dom";
import { argentBankLogo, iconLogin, iconLogout, styles } from "../../../assets";
import { Routes } from "../../../global";
import { useAppSelector } from "../../../app/hooks";
import { getToken } from "../../../features";

const Header = () => {
  const token = useAppSelector(getToken);

  const handleClick = () => {};

  return (
    <nav className={styles.mainNav}>
      <Link className={styles.mainNavLogo} to={Routes.HOME}>
        <img
          className={styles.mainNavLogoImage}
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className={`${styles.srOnly}`}>Argent Bank</h1>
      </Link>

      <Link
        to={Routes.SIGNIN}
        className={styles.headerRight}
        onClick={handleClick}
      >
        <img
          src={token ? iconLogout : iconLogin}
          className={styles.headerLogo}
          alt="icon login/logout"
        />
        {token ? "Logout" : "Login"}
      </Link>
    </nav>
  );
};
export default Header;
