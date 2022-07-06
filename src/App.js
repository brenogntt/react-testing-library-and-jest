import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
const [buttonColor, setButtonColor] = useState('MediumViolateRed');
const [disabled, setDisabled] = useState(false);

const newColorButton = buttonColor === 'MediumViolateRed' ? 'MidnightBlue': 'MediumViolateRed';

  return (
    <div>
      <button 
      style={{backgroundColor: disabled ? 'gray' : buttonColor}}
      onClick={() => setButtonColor(newColorButton)}
      disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newColorButton)}
      </button>
      <input 
      id="disable-button-checkbox"
      type="checkbox" 
      onChange={(e) => { 
        setDisabled(e.target.checked)
       }}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
