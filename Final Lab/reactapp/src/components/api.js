// Api.js
import React, { useState, useEffect } from 'react';

const Api = () => {
  const [updatedCoffee, setUpdatedCoffee] = useState({
    name: 'Updated Coffee',
    price: 4.0,
    availability: true,
  });

  const coffeeIdToUpdate = 1; // Replace with the actual ID you want to update

  useEffect(() => {
    // Make the PUT request when the component mounts
    updateCoffee();
  }, []);

  const updateCoffee = () => {
    fetch(`http://localhost:5000/api/products/${coffeeIdToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(updatedCoffee => {
        console.log('Updated Coffee:', updatedCoffee);
      })
      .catch(error => {
        console.error('Error updating coffee:', error);
      });
  };

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default Api;
