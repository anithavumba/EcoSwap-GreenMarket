import React from 'react';

function ItemDetail({ itemId }) {
  // You can fetch detailed item information based on the itemId
  const item = {
    id: 1,
    title: 'Reusable Water Bottle',
    description: 'Stay hydrated and eco-friendly with this reusable water bottle.',
    category: 'Kitchen & Dining',
    condition: 'New',
    location: 'New York, USA',
    owner: 'JohnDoe123',
    contactEmail: 'johndoe@example.com',
    imageUrl: 'item-image.jpg', // Replace with the actual image URL
  };

  return (
    <div className="item-detail">
      <h2>Item Details</h2>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Category: {item.category}</p>
        <p>Condition: {item.condition}</p>
        <p>Location: {item.location}</p>
        <p>Owner: {item.owner}</p>
        <p>Contact Email: {item.contactEmail}</p>
        <img src={item.imageUrl} alt={item.title} className="item-image" />
        {/* Add more item details here */}
      </div>
      {/* Add buttons or actions for swapping or returning to the item list */}
    </div>
  );
}

export default ItemDetail;
