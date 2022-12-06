import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, handleRemoveTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">₱{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button onClick={() => handleRemoveTour(id)} className="delete-btn">
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

// 009 tours
