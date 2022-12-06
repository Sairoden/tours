import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, handleRemoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map(tour => {
            return (
              <Tour
                handleRemoveTour={handleRemoveTour}
                key={tour.id}
                {...tour}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
