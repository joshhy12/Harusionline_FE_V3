import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { portfolioItems } from '../pages/Portfolio';

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const selectedCard = portfolioItems.find(item => item.id === parseInt(id));
    setCard(selectedCard);
  }, [id]);

  if (!card) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>{card.title}</h2>
      <img src={card.img} alt={card.title} className="img-fluid mb-3" />
      <p>Category: {card.category}</p>
      <p>Price  </p>
      <p>Description  </p>
    </div>
  );
};

export default CardDetails;
