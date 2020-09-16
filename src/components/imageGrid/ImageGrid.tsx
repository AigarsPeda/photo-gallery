import React from "react";
import useFirestore from "../../hooks/useFirestore";

// motion
import { motion } from "framer-motion";

// type
import { ImageCollection } from "../../types/type";

interface Props {
  setSelectedImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ImageGrid: React.FC<Props> = (props) => {
  const { setSelectedImg } = props;
  const { docs }: { docs: ImageCollection[] } = useFirestore("images");

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc: ImageCollection) => {
          return (
            <motion.div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
              whileHover={{ opacity: 1, scale: 1.05 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
