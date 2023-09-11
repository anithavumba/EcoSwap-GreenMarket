// src/dataService.js
import database from './firebase';

// Create a function to write data to the database
export const writeData = (path, data) => {
  return database.ref(path).set(data);
};

// Create a function to read data from the database
export const readData = (path) => {
  return database.ref(path).once('value')
    .then((snapshot) => snapshot.val());
};
