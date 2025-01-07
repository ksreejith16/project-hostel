import React, { useState } from 'react';
import './resouceshare.css';

function ResourceShare() {
  const [resources, setResources] = useState([
    { id: 1, name: 'W3Schools Python Tutorial', url: 'https://www.w3schools.com/python/', description: 'Comprehensive Python tutorial.' },
    { id: 2, name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', description: 'A vast resource for computer science topics.' },
    { id: 3, name: 'Mozilla Developer Network', url: 'https://developer.mozilla.org/', description: 'Documentation for web technologies.' },
  ]);
  const [resourceName, setResourceName] = useState('');
  const [resourceUrl, setResourceUrl] = useState('');
  const [resourceDescription, setResourceDescription] = useState('');

  const handleResourceNameChange = (e) => {
    setResourceName(e.target.value);
  };

  const handleResourceUrlChange = (e) => {
    setResourceUrl(e.target.value);
  };

  const handleResourceDescriptionChange = (e) => {
    setResourceDescription(e.target.value);
  };

  const handleShareResource = (e) => {
    e.preventDefault();
    const newResource = {
      id: resources.length + 1,
      name: resourceName,
      url: resourceUrl,
      description: resourceDescription
    };
    setResources([...resources, newResource]);
    setResourceName('');
    setResourceUrl('');
    setResourceDescription('');
  };

  return (
    <div className="resource-share-container">
      <h2>Community Corner</h2><br></br>
      <p>Sharing resources can greatly benefit our community by providing valuable information and tools that can help everyone succeed. Please share any useful resources you know of that could help others.</p>
      
      <h3>Share a Resource</h3>
      <form onSubmit={handleShareResource}>
        <div className="form-group">
          <label htmlFor="resourceName">Resource Name:</label>
          <input
            type="text"
            id="resourceName"
            name="resourceName"
            value={resourceName}
            onChange={handleResourceNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resourceUrl">Resource URL:</label>
          <input
            type="url"
            id="resourceUrl"
            name="resourceUrl"
            value={resourceUrl}
            onChange={handleResourceUrlChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resourceDescription">Description:</label>
          <textarea
            id="resourceDescription"
            name="resourceDescription"
            value={resourceDescription}
            onChange={handleResourceDescriptionChange}
            required
          ></textarea>
        </div>
        <button type="submit">Share Resource</button>
      </form>

      <h3>Shared Resources</h3>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-item">
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <h4>{resource.name}</h4>
            </a>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceShare;
