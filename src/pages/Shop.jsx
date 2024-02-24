import React from "react";
import { Slider } from "@nextui-org/react";
const Shop = () => {
  const [value, setValue] = React.useState([100, 300]);
  return (
    <div className="py-20 sm:pt-28">
      <div className="w-full flex flex-col px-5 relative sm:px-12 md:px-16 lg:px-20">
        <img
          src="/shop.jpg"
          className="w-full sepia-0 max-h-96 object-cover object-center"
        />
        <div className="flex flex-col items-start space-y-4 absolute top-20 sm:top-24 md:top-28 lg:top-32 left-8 sm:left-20 md:left-24 lg:left-28 ">
          <h1 className=" text-white drop-shadow-xl  leading-[1.2]   text-xl sm:text-2xl md:text-3xl lg:text-4xl font-volkhov ">
            Our goods have the best quality
            <br /> and material in the world
          </h1>
          <button
            onClick={() =>
              window.scroll({
                top: 460,
                behavior: "smooth",
              })
            }
            className="bg-orange-700 font-roboto rounded-md hover:bg-orange-600 text-xs sm:text-base text-white px-6 py-2 uppercase"
          >
            shop now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full mt-16 gap-10 px-20">
        <div className="col-span-1 h-96 px-10">
          <h1 className="font-roboto font-semibold text-[#062338] mb-2">Filter By Price (Nrs)</h1>
          <Slider
            disableThumbScale={true}
            showTooltip={true}
            size="md"
            step={1}
            maxValue={1000}
            minValue={0}
            value={value}
            onChange={setValue}
            className="max-w-sm"
          />
        </div>
        <div className="col-span-3 h-96"></div>
      </div>
    </div>
  );
};

export default Shop;
