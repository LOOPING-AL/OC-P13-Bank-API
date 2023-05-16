import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import React from "react";
import SignIn from "../components/pages/SignIn";
import User from "../components/pages/User";
import Transactions from "../components/pages/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  { path: "sign-in", element: <SignIn /> },
  { path: "user", element: <User /> },
  {
    path: "transactions/:transactionId",
    element: <Transactions />,
    errorElement: <Home />,
  },
]);

export default router;
