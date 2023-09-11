import React from 'react';

const ListGridViewToggle = ({ view, onViewChange }) => {
  return (
    <div className="list-grid-view-toggle">
      <button
        className={`toggle-button ${view === 'list' ? 'active' : ''}`}
        onClick={() => onViewChange('list')}
      >
        List View
      </button>
      <button
        className={`toggle-button ${view === 'grid' ? 'active' : ''}`}
        onClick={() => onViewChange('grid')}
      >
        Grid View
      </button>
    </div>
  );
};

export default ListGridViewToggle;
