// Item.js

import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className=" bg-red-200 border p-4 mb-4">

      <div className=" flex items-center justify justify-between">
        <div>
            <p  className="text-black font-bold text-lg mb-2">{name}</p>
            <p  className="text-black">Quantity: {quantity}</p>
        </div>
        <span className="text-black">Category: {category}</span>
      </div>
    </li>
  );
};

export default Item;
