import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const handleRemoveTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);

    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setTours(data);
      setLoading(false);
    } catch (err) {
      alert("Couldn't fetch");
      setLoading(true);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
  }

  return (
    <>
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          {tours.length === 0 ? (
            <div className="title">
              <h2>no tours left</h2>
              <button className="btn" onClick={() => fetchTours()}>
                Refresh
              </button>
            </div>
          ) : (
            <Tours handleRemoveTour={handleRemoveTour} tours={tours} />
          )}
        </main>
      )}
    </>
  );
}

export default App;

// 07 fetch tours data

// tours.length === 0 ?
//       <main>
//         <div className="title">
//           <h2>no tours left</h2>
//           <button onClick={() => fetchTours()}></button>
//         </div>
//       </main>
