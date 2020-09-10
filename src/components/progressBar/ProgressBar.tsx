import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

interface Props {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const ProgressBar: React.FC<Props> = (props) => {
  const { file, setFile } = props;
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(undefined);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
