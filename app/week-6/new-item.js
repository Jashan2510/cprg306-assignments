"use client";
import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const generateRandomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: generateRandomId(),
      name,
      quantity,
      category,
    };

    // Call the onAddItem prop with the new item object
    onAddItem(newItem);

    // Reset form inputs
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">Item Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-200 rounded-md shadow-sm"
          placeholder="Enter item name"
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-900">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-1 block w-full p-2 border border-gray-200 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-900">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-200 rounded-md shadow-sm bg-white"
        >
          {/* ...options */}
        </select>
      </div>

      <button type="submit" className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800">
        Add Item
      </button>
    </form>
  );
}
