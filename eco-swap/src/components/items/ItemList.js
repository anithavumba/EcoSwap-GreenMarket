import React, { useState } from 'react';
import Search from './Search';

function ItemList() {
  const [searchResults, setSearchResults] = useState([]);
  
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
