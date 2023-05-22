import { Link, useNavigate } from "react-router-dom";
import {
  argentBankLogo,
  iconLogin,
  iconLogout,
  styles,
  iconProfile,
} from "../../../assets";
import { Routes } from "../../../global";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getProfile, logout } from "../../../features";

const Header = () => {
  const profile = useAppSelector(getProfile);
  const dispatch = useAppDispatch();
  const isConnected = profile.firstName !== "";
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logout());
    navigate(Routes.SIGNIN);
  };

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

      <div className={styles.headerRight}>
        {profile.firstName !== "" && (
          <Link to={Routes.USER}>
            <img
              src={iconProfile}
              className={styles.headerLogo}
              alt="profile Icon"
            />
            {profile.firstName}
          </Link>
        )}

        <div onClick={handleClick}>
          <img
            src={profile.firstName !== "" ? iconLogout : iconLogin}
            className={styles.headerLogo}
            alt="icon login/logout"
          />
          {profile.firstName !== "" ? "Logout" : "Login"}
        </div>
      </div>
    </nav>
  );
};
export default Header;
