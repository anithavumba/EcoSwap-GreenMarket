import React from 'react';

function UploadItemsButton() {
  // Function to handle the item upload process
  const handleItemUpload = async () => {
    // Define the item data (modify this according to your data structure)
    const itemData = {
      name: 'Item Name',
      description: 'Item Description',
      price: 29.99,
      category: 'Electronics',
      condition: 'New',
      address: 'location',
      images: ['image_url_1.jpg', 'image_url_2.jpg'],
    };

    try {
      // Send a POST request to your server's API endpoint for item uploads
      const response = await fetch('/api/upload-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData), // Convert item data to JSON
      });

      if (!response.ok) {
        // Handle error responses (e.g., validation errors)
        throw new Error('Failed to upload item');
      }

      // Handle a successful item upload
      const result = await response.json();
      console.log(result);
    } catch (error) {
      // Handle network errors or server errors
      console.error('Item upload error:', error);
    }
  };

  return <button onClick={handleItemUpload}>Upload Items</button>;
}

export default UploadItemsButton;
