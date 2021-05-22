import { render, screen } from '@testing-library/react';
import App from './App';

test('Title document', () => {
  render(<App />);
  const linkElement = screen.getByText(/Concentration Game/i);
  expect(linkElement).toBeInTheDocument();
});
