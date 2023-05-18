import React from 'react'
import { itemsList } from '../Dashboard';
import '../Dashboard.css'

function Frig() {

  const filteredItems = itemsList.filter((item) => item.id === 2 || item.id === 7);

  return (
    
    <div className="dashboard-container">
  
      <div className="item-container">

      {filteredItems.map((item) => (
        <div key={item.id}  className="item-card">
            <img src={item.image} alt={item.name} />
          <div className="item-info"><h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
          

        </div>
      ))}
      </div>
    </div>

  )
}

export default Frig