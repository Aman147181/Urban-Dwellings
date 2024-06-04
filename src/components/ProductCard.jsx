import React from "react";


const ProductCard = ({ furniture }) => {
  return (
    <div className="relative h-full max-h-[400px] w-full group">
      <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 opacity-0 bg-black bg-opacity-40 group-hover:opacity-100 p-2 flex flex-col items-start justify-end">
        <h2 className="text-lg text-white font-volkhov font-semibold">{furniture.name}</h2>
        <p className="text-sm line-clamp-2 font-roboto text-white">{furniture.description}</p>
        <p className="text-sm text-white font-roboto font-bold">{"Nrs. "}{furniture.price}</p>
      </div>
      <img src={furniture.img_link} className=" w-full h-full object-center object-cover" alt={furniture.name} />
    </div>
  );
};

export default ProductCard;
