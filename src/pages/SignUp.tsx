import React, { useCallback, useContext, useState } from "react";
import {
  Link,
  Redirect,
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Input from "../components/reusable/input/Input";
import { projectFirestore } from "../firebase/config";

interface Props extends RouteComponentProps {}

const SignUp: React.FC<Props> = (props) => {
  const { history } = props;
  const { currentUser } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState<string>("");

  const handleSignUp = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      const { email, password } = loginData;
      event.preventDefault();
      try {
        await projectFirestore.app
          .auth()
          .createUserWithEmailAndPassword(email, password);
        history.push("/");
      } catch (err) {
        setError("Something went wrong");
        console.log(err);
      }
    },
    [history, loginData]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((state) => ({
      ...state,
      [name]: value
    }));
  };

  // if user is already log in
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
        <Link to="/sign-in">Do You have account?</Link>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
