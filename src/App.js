import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isVisible, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility((prevState) =>  !prevState);
  };

  return (
    <div className="App">
          
    </div>
  );
}

export default App;