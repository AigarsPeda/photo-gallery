import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

// motions
import { motion } from "framer-motion";

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

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    ></motion.div>
  );
};

export default ProgressBar;
