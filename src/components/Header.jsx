import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import CartComponent from "./Cart";
import {  Link as RouterLink } from "react-router-dom";

const Header = ({ sidebar, setSidebar }) => {
  return (
    <div className="fixed top-0 h-[72px] bg-white z-50 w-full px-5 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between text-base">
      <RouterLink to="/">
        {" "}
        <div className="flex justify-center space-x-2 items-center">
          <img src="/logo.png" className="h-10 rounded-full" />
          <h1 className="font-volkhov whitespace-nowrap text-xl font-bold text-[#254D4D]">
            Urban Dwellings
          </h1>
        </div>
      </RouterLink>

      <div className="md:flex items-center justify-center hidden xl:space-x-12 lg:space-x-8 md:space-x-5 ml-2 font-roboto uppercase text-base text-[#254D4D]">
        <RouterLink to="/">
          <h1 className="hover:text-[#C14E07]">home</h1>
        </RouterLink>
        <RouterLink to="/products">
          {" "}
          <h1 className="hover:text-[#C14E07]">product</h1>
        </RouterLink>
        <RouterLink to="/contact">
          <h1 className="hover:text-[#C14E07]">contact</h1>
        </RouterLink>
      </div>
      <div className=" flex items-center space-x-2 sm:space-x-3 justify-center text-[#254D4D]">
      <CartComponent/>
      </div>
      <button
        className="md:hidden text-[#254D4D] text-xl"
        onClick={() => setSidebar((el) => !el)}
      >
        {sidebar ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>

     
    </div>
  );
};

export default Header;
