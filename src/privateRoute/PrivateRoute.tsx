import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

interface Props extends RouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const { component, path, exact } = props;
  const { currentUser } = useContext(AuthContext);
  return currentUser ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/sign-up" />
  );
};

export default PrivateRoute;
