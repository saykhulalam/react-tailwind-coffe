import React from "react";
import logo from "../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";

const Nave = () => {
  return (
    <>
      <nav id="nave" className=" bg-white pt-[24px] pb-[24px]">
        <div className="max-w-container mx-auto">
          <div className="flex items-center justify-between">
            <img src={logo} alt="" />
            <ul className="flex gap-[56px] text-[20px] text-madeblack font-normal font-inter">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="flex gap-[16px] text-[25px] text-madeblack">
              <IoIosSearch />
              <PiShoppingBagOpenLight />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nave;
