import React from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  return (
    <div className="product">
      <div className="sec1">
        <img src={data.productImage} alt={data.productName} />
      </div>
      <div className="sec2">
        <h3>
          ₹{data.productPrice - data.discountPrice }  
          {" "}
          <span>₹{data.productPrice}</span>
        </h3>
        <span>{data.productName}</span>
      </div>
      <div className="sec3">
        <span>{data.countType}</span>
      </div>
      <div className="addBtn">
        <FaEye className="logoBtn"/>
        <FaPlus className="logoBtn"/>
      </div>
    </div>
  );
};

export default ProductCard;
