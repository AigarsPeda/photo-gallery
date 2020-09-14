import React from "react";
import "./global.styles/App.scss";

// components
import UploadPage from "./pages/uploadPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <UploadPage />
    </div>
  );
};

export default App;
