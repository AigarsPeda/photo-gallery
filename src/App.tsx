import React, { useState } from "react";
import "./global.styles/App.scss";

// components
import Title from "./components/title/Title";
import UploadForm from "./components/uploadForm/UploadForm";
import ImageGrid from "./components/imageGrid/ImageGrid";
import Modal from "./components/modal/Modal";

const App: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string>();

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;
