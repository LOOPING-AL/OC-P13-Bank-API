import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login, getErrorMessage, getProfile } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  changeErrorMessage,
  getMessage,
  login as reduxLogin,
} from "../../../features";
import { MessageError, Routes } from "../../../global";
import { styles } from "../../../assets";

const SigninContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errorMessage = useAppSelector(getMessage);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    const response = await login(email, password);

    if (response.status === 200) {
      const token = response.body.token;
      const profile = await getProfile(token);
      dispatch(reduxLogin({ token, user: profile.body }));
      dispatch(changeErrorMessage(null));

      navigate(Routes.USER);

      return;
    }

    dispatch(changeErrorMessage(getErrorMessage(response)));
  };

  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <h1>Sign In</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            className={`${styles.inputWrapper} ${
              errorMessage === MessageError.BAD_EMAIL && styles.errorColor
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              // defaultValue={"tony@stark.com"}
            />
          </div>

          <div
            className={`${styles.inputWrapper} ${
              errorMessage === MessageError.BAD_PASSWORD && styles.errorColor
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              // defaultValue={"password123"}
            />
          </div>

          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <div className={`${styles.errorMessage} ${styles.errorColor}`}>
            {errorMessage}
          </div>

          <button className={styles.signInButton} type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SigninContent;
