import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterHeading = screen.getByText(/Counter/i);
  expect(counterHeading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countAfterIncrement = screen.getByTestId('count');
  expect(countAfterIncrement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);  
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countAfterDecrement = screen.getByTestId('count');
  expect(countAfterDecrement).toHaveTextContent('0');
});
