import React, { useCallback, useContext, useState } from "react";

// router
import {
  Link,
  Redirect,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

// firebase
import { AuthContext } from "../../auth/AuthProvider";
import { projectFirestore } from "../../firebase/config";

// components
import Input from "../reusable/input/Input";

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
    <div className="sign-in">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <Input
          label="EMAIL"
          name="email"
          type="email"
          autoComplete="On"
          value={loginData.email}
          handleChange={handleChange}
        />
        <Input
          label="PASSWORD"
          name="password"
          type="password"
          value={loginData.password}
          handleChange={handleChange}
        />
        {error && <div>{error}</div>}
        <button type="submit">Log in</button>
        <section>
          <span>Don't have account?</span>
          <Link to="/sign-up">Sign Up</Link>
        </section>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
