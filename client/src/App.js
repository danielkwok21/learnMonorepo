import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:4000`)
      .then(res => res.json())
      .then(res => setSuccess(res.success))
  }, [])

  return (
    <div className="App">
      {
        success ? <p style={{ color: 'green' }}>Success</p> : <p style={{ color: 'green' }}>Fail</p>
      }
    </div>
  );
}

export default App;
