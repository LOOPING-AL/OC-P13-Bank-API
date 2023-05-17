import { FormEvent, useState } from "react";
import login from "../../api/login";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import styles from "../../assets/styles/App.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getKey, login as reduxLogin } from "../../features/data/dataSlice";

const SignIn = () => {
  const key = useAppSelector(getKey);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const response = await login(email, password);
    response.status === 200 && dispatch(reduxLogin(response.body.token));
  };

  return (
    <>
      <Header />

      <main className={`${styles.main} ${styles.bgDark}`}>
        <section className={styles.signInContent}>
          <i
            className={`${styles.fa} ${styles.faUserCircle} ${styles.signInIcon}`}
          ></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputWrapper}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className={styles.inputRemember}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className={styles.signInButton} type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
