import React, { useState } from "react";

import ProgressBar from "../progressBar/ProgressBar";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<string>();

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(undefined);
    } else {
      setFile(undefined);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form className="upload-form">
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
