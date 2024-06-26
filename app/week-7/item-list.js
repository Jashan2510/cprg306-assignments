"use client";
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  // State initialization remains unchanged
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sorting and grouping logic remains unchanged
  const sortedItems = [...items].sort((a, b) => {
    if (groupByCategory) {
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    } else {
      return sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category);
    }
  });

  

  return (
    <div>
      {/* Sort and Group Buttons remain unchanged */}
      <button onClick={() => setSortBy('name')}>
        Sort by Name
      </button>
      <button onClick={() => setSortBy('category')}>
        Sort by Category
      </button>
      <button onClick={() => setGroupByCategory(!groupByCategory)}>
        Group by Category
      </button>

      {groupByCategory ? (
        Object.entries(
          sortedItems.reduce((acc, item) => {
            const category = item.category;
            acc[category] = [...(acc[category] || []), item];
            return acc;
          }, {})
        ).map(([category, categoryItems]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold capitalize">{category}</h2>
            <ul>
              {categoryItems.map((item) => (
                
                <li key={item.id} onClick={() => onItemSelect(item.name)}>
                  <Item {...item} />
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        sortedItems.map((item) => (
          
          <li key={item.id} onClick={() => onItemSelect(item.name)}>
            <Item {...item} />
          </li>
        ))
      )}
    </div>
  );
};

export default ItemList;
