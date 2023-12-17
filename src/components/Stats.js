export default  function Stats({ items }) {
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
