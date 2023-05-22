import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getErrorMessage, getProfile } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeErrorMessage, getToken } from "../../../features";
import { profileType, Routes } from "../../../global";
import { Footer, Header } from "../../ui";
import UserContent from "./UserContent";

const User = () => {
  const token = useAppSelector(getToken);
  const [profile, setProfile] = useState<profileType | undefined>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!profile) {
      getProfile(token).then((res) => {
        if (res.status === 200) {
          setProfile(res.body);
          return;
        }

        dispatch(changeErrorMessage(getErrorMessage(res)));
        navigate(Routes.SIGNIN);
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
        <Navigate to={Routes.SIGNIN} />
      )}
    </>
  );
};

export default User;
