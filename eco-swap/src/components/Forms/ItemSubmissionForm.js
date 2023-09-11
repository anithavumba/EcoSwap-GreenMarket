import React, { useState } from 'react';

const ItemSubmissionForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ itemName, itemDescription });
  };

  return (
    <form className="item-submission-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <textarea
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Item</button>
    </form>
  );
};

export default ItemSubmissionForm;
