import './Form.css';
import { useState } from 'react';

function Form({ addTrick }) {
  const [stance, setStance] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [trickName, setTrickName] = useState('');
  const [tutorial, setTutorial] = useState('');

  function submitTrick(event) {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      stance: stance,
      name: trickName,
      obstacle: obstacle,
      tutorial: tutorial,
    };
    addTrick(newTrick);
    clearInput();
  }

  function clearInput() {
    setStance('');
    setObstacle('');
    setTrickName('');
    setTutorial('');
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Add A Trick</h2>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Trick Name"
          name="trick-name"
          value={trickName}
          onChange={event => setTrickName(event.target.value)}
        />
        <select
          className="input"
          id="select-stance"
          name="select-stance"
          value={stance}
          onChange={event => setStance(event.target.value)}
        >
          <option value="option-regular">Regular</option>
          <option value="option-switch">Switch</option>
        </select>
        <select
          className="input"
          id="select-obstacle"
          name="select-obstacle"
          value={obstacle}
          onChange={event => setObstacle(event.target.value)}
        >
          <option value="option-flatground">Flatground</option>
          <option value="option-ledge">Ledge</option>
          <option value="option-rail">Rail</option>
          <option value="option-stairs">Stairs</option>
          <option value="option-pool">Pool</option>
        </select>
        <input
          className="input"
          type="text"
          placeholder="Link to Tutorial"
          name="tutorial"
          value={tutorial}
          onChange={event => setTutorial(event.target.value)}
        />
        <button className="submit-btn" onClick={event => submitTrick(event)}>
          Send It!
        </button>
      </form>
    </div>
  );
}

export default Form;
