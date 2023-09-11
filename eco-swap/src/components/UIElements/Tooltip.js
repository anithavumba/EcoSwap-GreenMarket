import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-container">
      <div
        className={`tooltip ${showTooltip ? 'active' : ''}`}
        onClick={() => setShowTooltip(!showTooltip)}
      >
        {text}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
