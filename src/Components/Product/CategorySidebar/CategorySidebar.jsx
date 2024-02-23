import React from "react";
import { grocery, chocolates, meats, gifts } from "../../../Assets";
import './CategorySidebar.css'

const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      title: "Grocery",
      image: grocery,
    },
    {
      id: 2,
      title: "Chocolate",
      image: chocolates,
    },
    {
      id: 3,
      title: "Meat",
      image: meats,
    },
    {
      id: 4,
      title: "Gifts",
      image: gifts,
    },
    {
      id: 5,
      title: "Grocery",
      image: grocery,
    },
    {
      id: 6,
      title: "Chocolate",
      image: chocolates,
    },
    {
      id: 7,
      title: "Meat",
      image: meats,
    },
    {
      id: 8,
      title: "Gifts",
      image: gifts,
    },
  ];
  return (
    <div className="categorySidebar">
      {data.map((item) => (
        <div className="category" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
