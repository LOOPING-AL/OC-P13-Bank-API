import React from "react";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import { useSelector, useDispatch } from "react-redux";
import getToken from "../../api/login";

const SignIn = () => {
  const data = useSelector((state: any) => state.data.value);
  const dispatch = useDispatch();
  const [tokenUser, getTokenUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;
    const test = await getToken(body.email, body.password);
    console.log(test);
  };

  const body = {
    email: "steve@rogers.com",
    password: "password456",
  };

  console.log(tokenUser);

  return (
    <>
      <Header />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <Link to={"/user"}> */}
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
            {/* </Link> */}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
function useState(): [any, any] {
  throw new Error("Function not implemented.");
}
