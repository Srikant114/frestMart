import React from "react";
import './AllProducts.css'
import {
  Anjou,
  Avocado,
  Banana,
  Cantaloupe,
  Conference,
  Galia_Melon,
  Golden_Delicious,
  Granny_Smith,
  Honeydew_Melon,
  Kaiser,
  Kiwi,
  Lemon,
  Lime,
  Mango,
  Nectarine,
  Orange,
  Papaya,
  Passion_Fruit,
  Peach,
  Pineapple,
  Pink_Lady,
  Plum,
  Pomegranate,
  Red_Delicious,
  Red_Grapefruit,
  Royal_Gala,
  Satsumas,
  Watermelon,
} from "../../../Assets";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  const fruitImages = [
    { name: "Anjou", image: Anjou },
    { name: "Avocado", image: Avocado },
    { name: "Banana", image: Banana },
    { name: "Cantaloupe", image: Cantaloupe },
    { name: "Conference", image: Conference },
    { name: "Galia_Melon", image: Galia_Melon },
    { name: "Golden_Delicious", image: Golden_Delicious },
    { name: "Granny_Smith", image: Granny_Smith },
    { name: "Honeydew_Melon", image: Honeydew_Melon },
    { name: "Kaiser", image: Kaiser },
    { name: "Kiwi", image: Kiwi },
    { name: "Lemon", image: Lemon },
    { name: "Lime", image: Lime },
    { name: "Mango", image: Mango },
    { name: "Nectarine", image: Nectarine },
    { name: "Orange", image: Orange },
    { name: "Papaya", image: Papaya },
    { name: "Passion_Fruit", image: Passion_Fruit },
    { name: "Peach", image: Peach },
    { name: "Pineapple", image: Pineapple },
    { name: "Pink_Lady", image: Pink_Lady },
    { name: "Plum", image: Plum },
    { name: "Pomegranate", image: Pomegranate },
    { name: "Red_Delicious", image: Red_Delicious },
    { name: "Red_Grapefruit", image: Red_Grapefruit },
    { name: "Royal_Gala", image: Royal_Gala },
    { name: "Satsumas", image: Satsumas },
    { name: "Watermelon", image: Watermelon },
  ];

  const imageMap = {};
  fruitImages.forEach((fruit) => {
    imageMap[fruit.name] = fruit.image;
  });

  const fruitNames = fruitImages.map((fruit) => fruit.name);

  const getRandomPrice = () => Math.floor(Math.random() * (500 - 50 + 1)) + 50;

  const getRandomDiscount = () => Math.floor(Math.random() * 12);

  const products = fruitNames.map((fruitName, index) => ({
    id: index + 1,
    productName: fruitName,
    productImage: imageMap[fruitName],
    productPrice: getRandomPrice(),
    countType: "1",
    discountPrice: Math.round(
      getRandomPrice() * (getRandomDiscount() / 100)
    ),
  }));

  return (
    <div className="allProducts">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
