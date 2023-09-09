import React from 'react';

function ItemList() {
  const items = [
    {
      id: 1,
      title: 'Reusable Water Bottle',
      description: 'Stay hydrated and eco-friendly with this reusable water bottle.',
    },
    {
      id: 2,
      title: 'Organic Cotton Tote Bag',
      description: 'Ditch plastic bags and carry your groceries in this eco-friendly tote bag.',
    },
    // Add more items as needed
  ];

  return (
    <div className="item-list">
      <h2>Items for Swap</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* Add a button/link to view item details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
