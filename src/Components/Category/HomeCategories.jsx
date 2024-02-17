import React from "react";

import { grocery, chocolates, meats, gifts } from "../../Assets";
import "./HomeCategories.css";

const HomeCategories = () => {
  const categoryList = [
    {
      id: 1,
      title: "Grocery",
      image: grocery,
      description: `Shop Grocery now`,
    },
    {
      id: 2,
      title: "Chocolate",
      image: chocolates,
      description: `Shop Chocolate now`,
    },
    {
      id: 3,
      title: "Meat",
      image: meats,
      description: `Shop Meat now`,
    },
    {
      id: 4,
      title: "Gifts",
      image: gifts,
      description: `Shop Gifts now`,
    },
  ];
  return (
    <div className="homeCategories">
      {categoryList.map((item) => {
        return (
          <div className="categoryContainer" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="categoryContainerContent">
              <h1>{item.title}</h1>
              <span>{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCategories;
