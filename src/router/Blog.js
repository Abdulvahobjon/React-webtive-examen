import React from "react";
import "./blog.css";
import Data from "../api/data.json"
function Blog() {
  return (
    <div>
      
    <span>Json data</span>
    <br />
      <div className="cards">
    {Data.map(item=>{
        return(
        
            <div className="card">
              <div className="card__tilt">
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
                <div className="card__tilt-tracker"></div>
              </div>
              <div className="card__content">
                <h1> Ism: {item.name}</h1>
               
                <p> Email:
                  {item.email}
                </p>
              </div>
            </div>
        )
    })}
    </div>
    </div>
  );
}

export default Blog;
