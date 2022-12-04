import { useState, useEffect } from 'react';
import { fireStore } from '../firebase/firebaseConfig';

const useFirestore = (collection: any) => {
  const [docs, setDocs] = useState<any>([]);

  useEffect(() => {
    const unsub = fireStore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap: any) => {
        let documents: any[] = [];
        snap.forEach((doc: any) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
}

export default useFirestore;
