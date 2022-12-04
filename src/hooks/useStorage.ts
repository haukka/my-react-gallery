import React, { useState, useEffect } from 'react';
import { fireStore, storage, timeStamp } from '../firebase/firebaseConfig';

const useStorage = (file: any) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('');

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionRef = fireStore.collection('images');

        storageRef.put(file).on('state changed', (snap: any) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err: any) => {
            setError(err)
        }, async () => {
            console.log('i fire once');
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error };
}

export default useStorage;