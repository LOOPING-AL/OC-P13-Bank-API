const genericCall = async (url: string, options: any) =>
  await fetch(`http://localhost:3001/api/v1/user/${url}`, options)
    .then((res) => res.json())
    .then((res) => res);

export default genericCall;
