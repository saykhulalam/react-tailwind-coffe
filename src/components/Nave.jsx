import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { ImMenu } from "react-icons/im";

const Nave = () => {
  let [manuShow, setManuShow] = useState(true);

  let handlemanu = () => {
    setManuShow(!manuShow);
  };
  return (
    <>
      <nav id="nave" className=" bg-white pt-[24px] pb-[24px]">
        <div className="max-w-container mx-auto px-3">
          <div className="flex items-center justify-between relative">
            <img src={logo} alt="" />

            <ul
              className={`flex xl:gap-[56px] gap-5 text-[20px] xl:text-madeblack font-normal font-inter xl:flex-row flex-col absolute xl:static top-16 xl:bg-transparent bg-black text-white py-4 px-5 ${
                manuShow ? "hidden" : "block"
              }`}
            >
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
              <div className="flex gap-[16px] text-[25px] xl:text-madeblack text-white">
                <IoIosSearch />
                <PiShoppingBagOpenLight />
              </div>
            </ul>

            <ImMenu
              onClick={handlemanu}
              className="text-[25px] xl:hidden mb-3"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nave;
