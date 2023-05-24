const genericCall = async (
  url: string,
  method: string,
  body: {} | undefined,
  token: string | undefined
) =>
  await fetch(`http://localhost:3001/api/v1/user/${url}`, {
    method: method,
    ...(body && {
      body: JSON.stringify(body),
    }),
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  })
    .then((res) => res.json())
    .then((res) => res);

export default genericCall;
