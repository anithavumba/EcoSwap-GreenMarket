import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
