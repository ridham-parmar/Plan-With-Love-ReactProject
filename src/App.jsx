import { useState } from "react";
import "./App.css";
import Tour from "./Component/Tour";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data) ;

  function removeTour(id) {
    let newTour = tours.filter((tour) => tour.id !== id );
    setTours(newTour) ;
  }

  if(tours.length === 0) {
    return (
      <div className="refresh">
        <div>
          <h2>No Tours Left</h2>
        </div>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
      <>
        <Tour tours={tours} removeTour={removeTour}></Tour>
      </>
  );
}

export default App;
