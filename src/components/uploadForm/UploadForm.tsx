import React, { useState } from "react";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File>();

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    }
  };

  return (
    <form>
      <h1>Ha</h1>
      <input type="file" onChange={changeHandler} />
    </form>
  );
};

export default UploadForm;
