import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../pages/E_card'; // Correct import for your data

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const selectedCard = items.find(item => item.id === parseInt(id));
    setCard(selectedCard);
  }, [id]);

  if (!card) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={card.image} alt={card.title} className="img-fluid mb-3" />
        </div>
        <div className="col-md-6">
          <h2>{card.title}</h2>
          <p><strong>Category:</strong> {card.category}</p>
          <p><strong>Price:</strong> {card.price}</p>
          <p><strong>Description:</strong> {card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
