import React from "react";
import "./global.styles/App.scss";

// router
import { Switch, Route, BrowserRouter } from "react-router-dom";

// pages
import UploadPage from "./pages/UploadPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={UploadPage} />
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/sign-up" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
