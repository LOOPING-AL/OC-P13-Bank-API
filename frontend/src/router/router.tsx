import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import Transactions from "../components/pages/Transactions";
import User from "../components/pages/User";

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
