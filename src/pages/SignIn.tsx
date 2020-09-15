import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Link, RouteComponentProps } from "react-router-dom";

import { projectFirestore } from "../firebase/config";
import { AuthContext } from "../auth/AuthProvider";
import Input from "../components/reusable/input/Input";

interface Props extends RouteComponentProps {}

const SignIn: React.FC<Props> = (props) => {
  const { history } = props;
  const { currentUser } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((state) => ({
      ...state,
      [name]: value
    }));
  };

  const handleSignIn = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, password } = loginData;
      try {
        await projectFirestore.app
          .auth()
          .signInWithEmailAndPassword(email, password);
        history.push("/");
      } catch (err) {
        setError("Something went wrong");
        console.log(err);
      }
    },
    [history, loginData]
  );

  // if user is already log in
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="On"
          value={loginData.email}
          handleChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={loginData.password}
          handleChange={handleChange}
        />
        {error && <div>{error}</div>}
        <button type="submit">Log in</button>
        <Link to="/sign-up">Don't have account?</Link>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
