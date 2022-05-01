import React from "react";

import { urlFor } from "../lib/client";

const PromotionGrid = ({ promotionBanner }) => {
  return (
    <div className="promotion-contatiner">
      {promotionBanner.map((item) => (
        <img
          src={urlFor(item.image)}
          alt={item.slug}
          key={item._id}
          className="promotion-image"
        ></img>
      ))}
    </div>
  );
};

export default PromotionGrid;
