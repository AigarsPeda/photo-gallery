import React from "react";

import { motion } from "framer-motion";

interface Props {
  selectedImg: string | undefined;
  setSelectedImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Modal: React.FC<Props> = (props) => {
  const { selectedImg, setSelectedImg } = props;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;

    if (element.classList.contains("modal")) {
      setSelectedImg(undefined);
    }
  };

  return (
    <motion.div
      className="modal"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarge pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
