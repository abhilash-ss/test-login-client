import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { loginUser } from "./api";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const Login = (userName: string, password: string) => {
    console.log("userName==", userName, "password==>", password);
    const response = loginUser(userName, password);
    if (response) {
      setIsLoggedIn(true);
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? <div>Login SuccessFul</div> : <LoginForm onClick={Login} />}
      {showAlert && <p>Invalid userName or password</p>}
    </div>
  );
}

export default App;
