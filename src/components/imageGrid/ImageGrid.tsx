import React from "react";
import useFirestore from "../../hooks/useFirestore";

// type
import { ImageCollection } from "../../types/type";

interface Props {
  setSelectedImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ImageGrid: React.FC<Props> = (props) => {
  const { setSelectedImg } = props;
  const { docs } = useFirestore("images");

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc: ImageCollection) => {
          return (
            <div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <img src={doc.url} alt="uploaded pic" />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
