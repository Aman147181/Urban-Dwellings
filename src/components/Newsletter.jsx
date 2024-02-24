import React from "react";

const Newsletter = () => {
  return (
    <div className="  my-10   px-5 sm:px-12 md:px-16 lg:px-20">
      <div className="bg-[#254D4D] sm:p-[3rem] p-8 rounded-[1.25rem] rounded-tl-[56px] relative ">
        <div className="">
          <p className="text-white font-roboto text-lg customsm:text-xl sm:text-2xl lg:text-3xl font-[600] text-left mb-[2.63rem]">
            Subscribe to get information, latest news and other{" "}
            <br className="hidden md:block" /> interesting offers about Urban Dwellings
          </p>

          <div className="flex justify-between flex-row  items-center gap-3 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <div className=" flex-grow z-10 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white h-[3rem] rounded-lg  w-full pl-3 focus:outline-none"
              />
            </div>
            <button className="px-7 py-2 text-white z-10  bg-[#C14E07] rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Newsletter;
