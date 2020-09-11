import React from "react";

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
    <div className="modal" onClick={handleClick}>
      <img src={selectedImg} alt="enlarge pic" />
    </div>
  );
};

export default Modal;
