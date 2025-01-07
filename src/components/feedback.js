import React, { useState } from 'react';
import './feedback.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the feedback
    console.log('Feedback submitted:', feedback);
    // Optionally, you can reset the form after submission
    setFeedback('');
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <p>We value your feedback! Your thoughts and suggestions help us improve our services and ensure a better experience for everyone.</p>
      <p>Please share your thoughts with us below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleInputChange}
            placeholder="Enter your feedback here..."
            required
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
