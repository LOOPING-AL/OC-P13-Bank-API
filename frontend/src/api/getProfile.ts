import genericCall from "./tools/genericCall";

const getProfile = async (token: string) =>
  genericCall("profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export default getProfile;
