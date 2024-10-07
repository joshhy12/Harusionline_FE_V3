import React, { useState } from "react";
import CardDetails from '../pages/CardDetails';
import { Link } from 'react-router-dom';

import '../styles/Portfolio.css'; 


import image1 from '../card/1.png';
import image2 from '../card/2.jpg';
import image3 from '../card/3.jpg';
import image4 from '../card/4.jpg';
import image5 from '../card/5.jpg';
import image6 from '../card/6.jpg';
import image7 from '../card/7.jpg';
import image8 from '../card/8.jpg';
import image9 from '../card/9.jpg';
import image10 from '../card/10.jpg';

export const portfolioItems = [
    { id: 1, category: "app", title: "App 1", img: image10 },
    { id: 2, category: "web", title: "Web 2", img: image2 },
    { id: 3, category: "app", title: "App 2", img: image3 },
    { id: 4, category: "card", title: "Card 2", img: image4 },
    { id: 5, category: "web", title: "Web 3", img: image5 },
    { id: 6, category: "app", title: "App 3", img: image6 },
    { id: 7, category: "card", title: "Card 1", img: image7 },
    { id: 8, category: "card", title: "Card 3", img: image8 },
    { id: 9, category: "web", title: "Web 1", img: image9 },
  ];
  

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);


    
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>E Card</h2>
          <p>Choose Ur design</p>
        </div>

        {/* Filters */}
        <ul id="portfolio-flters" className="d-flex justify-content-end">
          <li onClick={() => setFilter("all")} className={filter === "all" ? "filter-active" : ""}>All</li>
          <li onClick={() => setFilter("app")} className={filter === "app" ? "filter-active" : ""}>App</li>
          <li onClick={() => setFilter("card")} className={filter === "card" ? "filter-active" : ""}>Card</li>
          <li onClick={() => setFilter("web")} className={filter === "web" ? "filter-active" : ""}>Web</li>
        </ul>

        {/* Portfolio Items */}
        <div className="row portfolio-container">
  {filteredItems.map((item) => (
    <div className="col-lg-4 col-md-6 portfolio-item" key={item.id}>
      <Link to={`/card-details/${item.id}`} className="portfolio-link">
        <div className="portfolio-img">
          <img src={item.img} className="img-fluid" alt={item.title} />
        </div>
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <p>{item.category}</p>
        </div>
      </Link>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Portfolio;