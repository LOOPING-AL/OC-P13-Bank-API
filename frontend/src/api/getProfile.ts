import genericCall from "./tools/genericCall";

const profile = async (token: string) =>
  genericCall("profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export default profile;
