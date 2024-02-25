import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
const ProductCard = ({ imgUrl }) => {
  return (
    <div className=" w-full relative h-80">
      <img src={imgUrl} className="h-full w-full" />
      <div className="absolute top-1/3 right-3   flex items-center justify-center flex-col space-y-2   text-sm">
        <div className="bg-[#062338] w-7 h-7 text-white rounded-full flex items-center justify-center">
          <FaRegHeart />{" "}
        </div>
        <div className="bg-orange-100 w-7 h-7 text-[#062338] rounded-full flex items-center justify-center">
          <FiShoppingCart />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
