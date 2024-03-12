import React from 'react';

// Add onSelect prop to the component's arguments
const Item = ({ name, quantity, category, onSelect }) => {
  return (
    // Add onClick event handler to the <li> element
    <li className="border p-4 mb-4 cursor-pointer" onClick={() => onSelect(name)}>
      <div className="font-bold text-lg mb-2">{name}</div>
      <div className="text-gray-600">Quantity: {quantity}</div>
      <div className="text-gray-600">Category: {category}</div>
    </li>
  );
};

export default Item;
