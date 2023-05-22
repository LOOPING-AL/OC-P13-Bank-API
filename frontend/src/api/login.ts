import genericCall from "./tools/genericCall";

const login = async (email: string, password: string) =>
  genericCall("login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

export default login;
