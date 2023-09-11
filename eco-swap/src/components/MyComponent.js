// src/components/MyComponent.js
import React, { useState } from 'react';
import { writeData, readData } from '../dataService';

function MyComponent() {
  const [data, setData] = useState('');

  const handleWriteData = () => {
    const newData = 'Hello, Firebase!';
    writeData('messages/message1', newData)
      .then(() => {
        console.log('Data written successfully');
      })
      .catch((error) => {
        console.error('Error writing data:', error);
      });
  };

  const handleReadData = () => {
    readData('messages/message1')
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error reading data:', error);
      });
  };

  return (
    <div>
      <button onClick={handleWriteData}>Write Data</button>
      <button onClick={handleReadData}>Read Data</button>
      <p>Data from Firebase: {data}</p>
    </div>
  );
}

export default MyComponent;
