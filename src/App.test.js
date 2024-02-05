import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard labels', () => {
  render(<App />);
  expect(screen.getByText(/General Pokemon information/i)).toBeInTheDocument();

  expect(screen.getByText(/Pokemon colours/i)).toBeInTheDocument();
  expect(screen.getByText(/List of all the colours/i)).toBeInTheDocument();

  expect(screen.getByText(/Pokemon Gender/i)).toBeInTheDocument();

  expect(screen.getByText(/List of all the genders/i)).toBeInTheDocument();
  expect(screen.getByText(/Pokemon counts/i)).toBeInTheDocument();

  expect(screen.getByText(/Pokemon counts/i)).toBeInTheDocument();

  expect(screen.getByText(/Genderless count/i)).toBeInTheDocument();
  expect(screen.getByText(/Female count/i)).toBeInTheDocument();
  expect(screen.getByText('Male count')).toBeInTheDocument();
});
