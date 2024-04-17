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
    <main className=" p-5 min-h-screen bg-red-300">
      <div className="max-w-5xl mx-auto text-black">
        <h1 className="text-4xl font-bold text-center text-blue-900">Shopping List</h1>
      {/* Pass handleAddItem event handler to NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass items state to ItemList component */}
      <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
