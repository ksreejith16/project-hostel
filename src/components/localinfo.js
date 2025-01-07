import React, { useState } from 'react';
import './localinfo.css';

function LocalInfo() {
  const [placeName, setPlaceName] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePlaceNameChange = (e) => {
    setPlaceName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePost = () => {
    if (!placeName || !description) return;
    const newPost = {
      placeName: placeName,
      description: description,
      author: 'User', // You can set the author name dynamically if needed
    };
    setPosts([...posts, newPost]);
    setPlaceName('');
    setDescription('');
  };

  return (
    <div className="local-info-container">
      <h2>Community Corner</h2>
      <p>Share and discover local information about the VNR Hostels Pragathinagar area!</p>
      <div className="post-input">
        <strong><label htmlFor="placeName">Place Name:</label></strong>
        <input
          type="text"
          id="placeName"
          className='onein'
          value={placeName}
          onChange={handlePlaceNameChange}
          placeholder="Enter place name"
        />
        <br></br>
        <strong><label htmlFor="description">Description:</label></strong>
        <textarea 
          className='twoin'
          id="description"
          rows={5}
          cols={50}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter description"
        ></textarea>
        <br></br>
        <button onClick={handlePost}>Post</button>
      </div>
      
      <div className="other-text">
        <h3>About VNR Hostels Pragathinagar</h3>
        <p>VNR Hostels in Pragathinagar provide a comfortable and convenient stay for students pursuing education in nearby colleges. The locality offers various amenities such as supermarkets, restaurants, and parks.</p>
        <p>Explore more about Pragathinagar and its vibrant community!</p>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.placeName}</h3>
            <p>{post.description}</p>
            <p className="author">- {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocalInfo;
