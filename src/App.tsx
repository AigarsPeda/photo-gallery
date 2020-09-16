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
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/" component={UploadPage} />
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
