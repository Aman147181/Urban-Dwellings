import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
const Header = ({sidebar, setSidebar}) => {
  return (
    <div className="fixed top-0 h-[72px] bg-white z-10 w-full px-5 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between text-base">
      <div className="flex justify-center space-x-2 items-center">
        <img src="/logo.png" className="h-10 rounded-full" />
        <h1 className="font-volkhov whitespace-nowrap text-xl font-bold text-[#254D4D]">Urban Dwellings</h1>
      </div>
      
      <div className="md:flex items-center justify-center hidden xl:space-x-12 lg:space-x-8 md:space-x-5 ml-2 font-roboto uppercase text-base text-[#254D4D]">
        <h1 className="hover:text-[#C14E07]"><a href="#home">home</a></h1>
        <h1 className="hover:text-[#C14E07]"><a href="#about">about</a></h1>
        <h1 className="hover:text-[#C14E07]"><a href="#product">products</a></h1>
        <h1 className="hover:text-[#C14E07]"><a href="#contact">contact</a></h1>
      </div>
      <button className="rounded-full hidden md:block  text-[#254D4D] text-2xl   uppercase  md:hover:text-[#815b44]"><CgProfile /></button>
      <button className="md:hidden text-[#254D4D]" onClick={() => setSidebar(el => !el)}>{sidebar ? <RxCross2 />:<RxHamburgerMenu /> }</button>
    </div>
  );
};

export default Header;
