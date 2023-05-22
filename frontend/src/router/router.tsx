import { createBrowserRouter } from "react-router-dom";
import {
  HomeMain,
  SignInMain,
  TransactionsMain,
  UserMain,
} from "../components/pages";
import { Routes } from "../global";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomeMain />,
    errorElement: <HomeMain />,
  },
  { path: Routes.SIGNIN, element: <SignInMain /> },
  { path: Routes.USER, element: <UserMain /> },
  {
    path: `${Routes.TRANSACTIONS}/:transactionId`,
    element: <TransactionsMain />,
    errorElement: <HomeMain />,
  },
]);

export default router;
