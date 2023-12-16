import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function toggleItems(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Listitem items={items} onDeleteItems={handleDeleteItems} onToggleItems={toggleItems} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    // Reset form fields
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>

      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Listitem({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={() => onToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((i) => i.packed).length;

  if (!totalItems) {
    return (
      <em>
        <p className="stats"> Add some items to the list to get 🚀 </p>
      </em>
    );
  }

  const packingPercentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        you have {totalItems} items in your bag and you already packed {packedItems} (
        {packingPercentage}%) {packingPercentage === 100 ? "You are ready to go!" : null}
      </em>
    </footer>
  );
}
