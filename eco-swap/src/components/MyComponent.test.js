// src/components/MyComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without errors', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('displays a button', () => {
    render(<MyComponent />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
