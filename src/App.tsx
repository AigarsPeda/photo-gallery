import React from "react";
import "./global.styles/App.scss";

// components
import Title from "./components/Title/Title";
import UploadForm from "./components/uploadForm/UploadForm";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Title />
        <UploadForm />
      </div>
    );
  }
}

export default App;
