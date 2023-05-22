import genericCall from "./tools/genericCall";

const editProfile = (firstName: string, lastName: string, token: string) =>
  genericCall("profile", {
    method: "put",
    body: JSON.stringify({
      firstName,
      lastName,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export default editProfile;
