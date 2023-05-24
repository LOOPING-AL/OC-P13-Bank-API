import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getErrorMessage, getProfile } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  changeErrorMessage,
  getToken,
  getProfile as getProfileRedux,
  updateName,
} from "../../../features";
import { Routes } from "../../../global";
import { Footer, Header } from "../../ui";
import UserContent from "./UserContent";

const User = () => {
  const token = useAppSelector(getToken);
  const profile = useAppSelector(getProfileRedux);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!profile) {
      getProfile(token).then((res) => {
        if (res.status === 200) {
          dispatch(
            updateName({
              firstName: res.body.firstName,
              lastName: res.body.lastName,
            })
          );
          return;
        }

        dispatch(changeErrorMessage(getErrorMessage(res)));
        navigate(Routes.LOGIN);
      });
    }
  });

  return (
    <>
      {token ? (
        <>
          {profile && (
            <>
              <Header />

              <UserContent profile={profile} />

              <Footer />
            </>
          )}
        </>
      ) : (
        <Navigate to={Routes.LOGIN} />
      )}
    </>
  );
};

export default User;
