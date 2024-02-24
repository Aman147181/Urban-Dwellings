import React from "react";

const Sidebar = ({ sidebar }) => {
  return (
    <div className="md:hidden w-full">
      <div
        className={` fixed transition-transform duration-700 ease-in-out transform ${
          sidebar ? "  translate-x-0 " : "-translate-x-full"
        } z-10  text-black px-5 sm:px-10    top-24 w-full `}
      >
        <div className="bg-white/80 backdrop-blur-sm flex flex-col space-y-3 py-3 max-w-xl items-center font-lato font-medium text-lg w-full mx-auto rounded-xl border-2  text-[#062338] shadow-xl ">
        <h1><a href="#home">home</a></h1>
        <h1><a href="#about">about</a></h1>
        <h1><a href="#product">products</a></h1>
        <h1><a href="#contact">contact</a></h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
