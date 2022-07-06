import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App/>);

  //find an element with a role of button and text of 'Change to MidnightBlue'
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  
  // expect the background cplor to be MediumViolateRed
  expect(button).toHaveStyle({ backgroundColor: 'MediumViolateRed' });

  // click button
  fireEvent.click(button);

  // expect the background color to be MidnightBlue
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to MediumViolateRed'

  expect(button.textContent).toBe('Change to Medium Violate Red');
});

test('initial conditions', () => {
  render(<App />);
  
  // check that the button starts out enabled
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('testing checkbox and button behavior when it is checked or unchecked', () => {
  render(<App />);

  // checking initial state of the button
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
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

  //checking if button is enabled again and MediumViolateRed
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'MediumViolateRed' });
  expect(button.textContent).toBe('Change to Midnight Blue');

  // clicking the button to change color and clicking on checkbox again 
  fireEvent.click(button);
  
  // checking if the button changed the color and text
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button.textContent).toBe('Change to Medium Violate Red');

  // clicking on checkbox again to disable the button
  fireEvent.click(checkbox);

  // checking if the button is disabled and gray
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  // click on checkbox again to unable the button
  fireEvent.click(checkbox);

  // checking if the button is enabled and MidnightBlue
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button.textContent).toBe('Change to Medium Violate Red');
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})