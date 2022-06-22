import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  //find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole('button', { name: 'Change to blue' });
  
  // expect the background cplor to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'

  expect(button.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  
  // check that the button starts out enabled
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('testing checkbox and button behavior when it is checked or unchecked', () => {
  render(<App />);

  // checking initial state of the button
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toBeEnabled();

  // checking initial state of the checkbox
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  expect(checkbox).not.toBeChecked();

  // clicking on checkbox
  fireEvent.click(checkbox);

  // checking if checkbox is in fact checked
  expect(checkbox).toBeChecked();

  // checking if button is disabled and gray
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  // clicking on checkbox again
  fireEvent.click(checkbox);

  // checking if checkbox is in fact unchecked
  expect(checkbox).not.toBeChecked();

  //checking if button is enabled again and red
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'red' });
  expect(button.textContent).toBe('Change to blue');

  // clicking the button to change color and clicking on checkbox again 
  fireEvent.click(button);
  
  // checking if the button changed the color and text
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('Change to red');

  // clicking on checkbox again to disable the button
  fireEvent.click(checkbox);

  // checking if the button is disabled and gray
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  // click on checkbox again to unable the button
  fireEvent.click(checkbox);

  // checking if the button is enabled and blue
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('Change to red');
})