// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter';

// beforeEach(() => {
//    render(<Counter />);
// })

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter initialCount={0}/>);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => { 
  render(<Counter initialCount={0}/>);
  // Find the increment button const increment
  const incrementButton = screen.getByText('+'); 
  // Click the increment button 
  fireEvent.click(incrementButton); 
  // Verify that the count has increased by 1 
  const countValue = screen.getByTestId('count'); 
  expect(countValue).toHaveTextContent('1'); 
}); 
  
test('clicking - decrements the count', () => { 
  render(<Counter initialCount={0}/>);
  // Find the decrement button 
  const decrementButton = screen.getByText('-'); 
  // Click the decrement button 
  fireEvent.click(decrementButton); 
  // Verify that the count has decreased by 1
  const countValue = screen.getByTestId('count'); 
  expect(countValue).toHaveTextContent('-1'); 
});


