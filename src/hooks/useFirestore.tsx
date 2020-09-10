import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collections: string) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collections)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        const documents: any = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    // unsubscribes from updates if components witch uses this
    // hook unmounted
    return () => unsub();
  }, [collections]);

  return { docs };
};

export default useFirestore;
