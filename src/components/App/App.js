import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';

function App() {
  function getTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setTricks([...tricks, ...data]))
      .catch(error => setError(error.message));
  }

  useEffect(() => {
    getTricks();
  }, []);

  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState('');

  function addTrick(newTrick) {
    setTricks([...tricks, newTrick]);
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App;
