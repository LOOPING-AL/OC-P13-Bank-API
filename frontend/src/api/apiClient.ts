import genericCall from "./tools/genericCall";

export const editProfile = (
  firstName: string,
  lastName: string,
  token: string
) => genericCall("profile", "PUT", { firstName, lastName }, token);

export const getProfile = async (token: string) =>
  genericCall("profile", "POST", undefined, token);

export const login = async (email: string, password: string) =>
  genericCall("login", "POST", { email, password }, undefined);
