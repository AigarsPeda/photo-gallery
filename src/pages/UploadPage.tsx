import React, { useState } from "react";

import ImageGrid from "../components/imageGrid/ImageGrid";
import Modal from "../components/modal/Modal";
import Title from "../components/title/Title";
import UploadForm from "../components/uploadForm/UploadForm";

const UploadPage: React.FC = () => {
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

export default UploadPage;
