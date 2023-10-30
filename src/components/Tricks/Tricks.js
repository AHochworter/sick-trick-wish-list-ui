import Card from '../Card/Card';
import('./Tricks.css');

function Tricks({ tricks }) {
  const trickCards = tricks.map(trick => {
    return (
      <Card
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    );
  });
  return <div className="tricks">{trickCards}</div>;
}

export default Tricks;
