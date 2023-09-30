import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error(`Performing search for: ${searchQuery}`);
    }
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
