import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem.jsx/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [load, setLoad] = useState(1);

  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => category === item.category || category === "All")
          .map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
      </div>

      <div className="food-display-list mobile">
        {food_list
          .filter((item) => category === item.category || category === "All")
          .slice(0, 4 * load)
          .map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
        {food_list.length > load * 4 ? (
          <button onClick={() => setLoad((prev) => prev + 1)}>Load More</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
