import React, { useState } from 'react';
import './lostfound.css';

function LostFound() {
  const [lostItems, setLostItems] = useState([
    { id: 1, name: 'Wallet', description: 'Black wallet with initials "JK" on it.' },
    { id: 2, name: 'Keys', description: 'Set of keys with a keychain shaped like a star.' },
    { id: 3, name: 'Phone', description: 'iPhone XR in black case.' },
    { id: 4, name: 'Laptop', description: 'Dell Inspiron 15 with a blue laptop bag.' },
    { id: 5, name: 'Watch', description: 'Silver watch with a leather strap.' }
  ]);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleReportLostItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: lostItems.length + 1,
      name: itemName,
      description
    };
    setLostItems([...lostItems, newItem]);
    setItemName('');
    setDescription('');
  };

  const handleDeleteItem = (id) => {
    const updatedItems = lostItems.filter(item => item.id !== id);
    setLostItems(updatedItems);
  };

  return (
    <div className="lost-found-container">
      <h2>Lost & Found</h2>
      <p>Report lost items or check if your lost item has been found.</p>
      <br />
      <h3>Report a Lost Item</h3>
      <form onSubmit={handleReportLostItem}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={itemName}
            onChange={handleItemNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <button type="submit">Report Lost Item</button>
      </form>

      <h3>Lost Items</h3>
      <div className="lost-items">
        {lostItems.map(item => (
          <div key={item.id} className="lost-item">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostFound;
