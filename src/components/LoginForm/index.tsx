import React, { FunctionComponent, useState } from "react";


interface Iprops {
    onClick: Function
}
const LoginForm:FunctionComponent<Iprops> = (props) => {
  // typefix
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  return (
    <div>
      LoginForm
      <div>
        User Name
        <input
          type="text"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        Password
        <input
          type="password"
          name="password"
          onChange={(e) => setPassWord(e.target.value)}
        />
        <button onClick={() => props.onClick(userName, password)}>
          Login/
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
