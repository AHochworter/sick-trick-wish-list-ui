import './Card.css';

function Card({ stance, name, obstacle, tutorial, id }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{stance}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
    </div>
  );
}

export default Card;
