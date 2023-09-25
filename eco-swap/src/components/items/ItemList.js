import React, { useState, useEffect } from 'react';
import Search from './Search'; // Import your Search component

// Import the items data from your JSON fil
import itemsData from '../../data/items.json'; // Adjust the path as needed

function ItemList() {
  const [searchResults, setSearchResults] = useState([]);
  const [items, setItems] = useState([]);

  // Fetch the items data when the component mounts
  useEffect(() => {
    // You can fetch data from an API or use local data as shown below
    setItems(itemsData);
  }, []);

  // Define a search function that handles the search logic
  const handleSearch = (query) => {
    // Perform the search logic here, e.g., filter items based on the query
    // Replace this with your actual search logic
    const filteredResults = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    // Update the search results state with the filtered items
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h2>Item List</h2>
      <Search onSearch={handleSearch} />
      {/* Display the search results */}
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
