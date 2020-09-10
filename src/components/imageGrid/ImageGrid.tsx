import React from "react";
import useFirestore from "../../hooks/useFirestore";

// type
import { ImageCollection } from "../../types/type";

const ImageGrid: React.FC = () => {
  const { docs } = useFirestore("images");

  console.log(docs);

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc: ImageCollection) => {
          return (
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="uploaded pic" />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
