import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];
export default  function App()
{
   return <div>
    <Logo/>
    <Form/>
    <Listitem/>
    <Stats/>
   </div>
}

function Logo(){
  return<h1>🌴Far Away 💼</h1>

}
 
function Form() {
  const[description,setDescription]=useState("testing");
  const[quantity,setQuantity]=useState(1);
  function handleSubmit(e)
  {
    e.preventDefault();
  }
  if(!description) return null;
  const NewItem={description,quantity,packed:false,id:Date.now()};
  console.log(NewItem);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select 
      value={quantity}
      onChange={(e)=>setQuantity(e.target.value)} >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      
      <input type="text" 
      placeholder="item..." 
      value={description} 
      onChange={(e)=>setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}


function Listitem() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration:'line-through'}:{} }> {item.quantity} {item.description}</span>
      <button>❌</button>
    </li>
  );
}

function Stats(){
  return( 
  <footer className="stats">
   <em> you have x items in your bag and you already packed x(x%)</em>
  </footer>
  );
}