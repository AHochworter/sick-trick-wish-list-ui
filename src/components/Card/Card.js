import './Card.css';

function Card({ stance, name, obstacle, tutorial, id }) {
  return (
    <div className="card">
      <h2>
        {stance} {name}
      </h2>
      <p>Obstacle: {obstacle}</p>
      <p className="link">
        <span className="tutorial-label">Link to Tutorial:</span>
        <br />
        <span className="tutorial-content">{tutorial}</span>
      </p>
    </div>
  );
}

export default Card;
