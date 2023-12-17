import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import Stats from "./Stats"; // Adjust the path as needed

import Listitem  from "./Listitem";

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
  function handleClearList(){
    const confirmed=window.confirm('Are you sure you want to clear the list');
   if(confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Listitem items={items}
       onDeleteItems={handleDeleteItems} 
       onToggleItems={toggleItems}
       onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}




