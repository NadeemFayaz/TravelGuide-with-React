import { useState } from "react";
import Item from "./Item.js";

export default function Listitem({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input value</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>

      <ul>
        {/* Depending on the sorting logic, you might want to sort the items here */}
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />
        ))}
      </ul>
    </div>
  );
}
