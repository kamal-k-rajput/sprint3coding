import { useEffect, useRef } from "react";
import axios from "axios";
export const Login = () => {
  //  use reqres to log user in.
  let user = useRef({ email: "", password: "" });
  useEffect(() => {
    axios
      .post("https://reqres.in/api/login", {
        email: user.email,
        password: user.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    console.log(e.target.name, "target");
    user = { ...user, name: value };
    console.log(user);
  };
  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handlechange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handlechange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
