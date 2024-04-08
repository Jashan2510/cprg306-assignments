// Import necessary components and dependencies
"use client";
import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import itemsData from './items.json'; 

// Functional component Page
const Page = () => {
  // Initialize state variable with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler function to add a new item to items
  const handleAddItem = (newItem) => {
    // Assuming newItem is an object with properties: id, name, quantity, and category
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Render function displaying NewItem and ItemList components
  return (
    <div>
      <h1>Shopping List App</h1>
      {/* Pass handleAddItem event handler to NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass items state to ItemList component */}
      <ItemList items={items} />
    </div>
  );
};

export default Page;
