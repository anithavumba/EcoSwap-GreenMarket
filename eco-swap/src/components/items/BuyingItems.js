import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Replace this with your API endpoint for fetching buying items
const API_URL = '/api/buying-items';

function BuyingItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Buying Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyingItems;
