import React from "react";
import { itemsList } from "../Dashboard";
import "../Dashboard.css";

function Tv() {
  const filteredItems = itemsList.filter(
    (item) => item.id === 3 || item.id === 6
  );

  return (
    <div className="dashboard-container">
      <div className="item-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <button>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tv;
