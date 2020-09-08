import React from "react";
import "./global.styles/App.scss";

// components
import Title from "./components/Title/Title";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Title />
      </div>
    );
  }
}

export default App;
