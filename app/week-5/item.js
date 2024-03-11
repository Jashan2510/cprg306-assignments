// Item.js

import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border p-4 mb-4">
      <div className="font-bold text-lg mb-2">{name}</div>
      <div className="text-gray-600">Quantity: {quantity}</div>
      <div className="text-gray-600">Category: {category}</div>
    </li>
  );
};

export default Item;
