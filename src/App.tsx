import React, { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import Upload from './components/Upload';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="app">
      <Title />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { (selectedImg) ? (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      ) : null}
    </div>
  );
}

export default App;
