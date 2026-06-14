import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders dashboard overview heading', () => {
  render(<App />);
  
  const heading = screen.getByText(/Dashboard Overview/i);
  expect(heading).toBeInTheDocument();
});