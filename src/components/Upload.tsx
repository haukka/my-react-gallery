import React, { useState } from 'react';
import isEnabled from '../utils/EnableTypes';
import ProgressBar from './ProgressBar';

const Upload = () => {
    const [file, setFile] = useState<any>(null);
    const [error, setError] = useState('');

    const uploadFile = (e: any) => {
        setError('');
        const selected = e?.target?.files[0];

        if (selected && isEnabled(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('Please select a valid image file (jpeg, jpg, png).');
        }
    }

    return (
        <form>
            <label>
                <input type={'file'} onChange={uploadFile} />
                <span>+</span>
            </label>
            <div className={'ouput'}>
                {(error) ? <div className={'error'}>{error}</div> : null}
                {(file && file?.name) ? <div className={''}>{file?.name}</div> : null}
                {(file) ? <ProgressBar file={file} setFile={setFile} />: null}
            </div>
        </form>
    );
};

export default Upload;