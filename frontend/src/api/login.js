const getToken = async (email, password) => {
  await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res);
};

export default getToken;
