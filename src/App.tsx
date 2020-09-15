import React from "react";
import "./global.styles/App.scss";

// router
import { Switch, Route, BrowserRouter } from "react-router-dom";

// context
import { AuthProvider } from "./auth/AuthProvider";

// components
import PrivateRoute from "./privateRoute/PrivateRoute";
import NavBar from "./components/navBar/NavBar";

// pages
import UploadPage from "./pages/UploadPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/" component={UploadPage} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
