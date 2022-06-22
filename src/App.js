import { useState } from 'react';
import './App.css';

function App() {

const [buttonColor, setButtonColor] = useState('red');
const [disabled, setDisabled] = useState(false);

const newColorButton = buttonColor === 'red' ? 'blue': 'red';

  return (
    <div>
      <button 
      style={{backgroundColor: disabled ? 'gray' : buttonColor}}
      onClick={() => setButtonColor(newColorButton)}
      disabled={disabled}
      >
        Change to {newColorButton}
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
