// const signUpUser = (firstName: string, ) => {
//   const register = await fetch(`http://localhost:3030/users/${userName}/login`, {
//     method: "POST",
//     body: JSON.stringify({ password }),
//   })
//   return true;
// };

const loginUser = async (userName: string, password: string) => {
  const token = await fetch(`http://localhost:3030/users/${userName}/login`, {
    method: "POST",
    body: JSON.stringify({ password }),
  })
    .then((response: any) => response.json())
    .then((data: any) => data);
  if (token.access_token) {
    return token;
  } else return false;
};

export { loginUser };
