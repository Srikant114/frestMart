import React from "react";
import Slider from "react-slick";

import "./BannerSlider.css";

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Fresh vegetable & Fruits at your doorstep",
      description: "We deliver fresh vegetables & fruits at your doorstep",
      link: "https://unsplash.com/photos/bunch-of-vegetables-D6Tu_L3chLE",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb2Nlcmllc3xlbnwwfDB8MHx8fDI%3D",
      title: "Fresh vegetable & Fruits at your doorstep",
      description:
        "Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.",
      link: "https://unsplash.com/photos/yellow-and-red-apples-on-black-plastic-crate-stpjHJGqZyw",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bannerSlider">
      <Slider className="bannerSlider" {...settings}>
        {data.map((item) => {
          return (
            <div className="bannerImageContainer" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="bannerContent">
                <h1>{item.title}</h1>
                <span>{item.description}</span>
                <button>Shop More</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
