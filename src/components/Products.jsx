import React from "react";
import coffe1 from "../assets/coffi1.png";
import coffe2 from "../assets/coffe2.png";
import coffe3 from "../assets/coffi3.png";
import coffe4 from "../assets/coffe4.png";
import { IoIosStar } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const Products = () => {
  return (
    <>
      <section id="products" className=" bg-white mb-[80px]">
        <div className="max-w-container mx-auto">
          <h4 className="text-[24px] font-inter font-normal text-madeblack text-center mb-[8px]">
            Our products
          </h4>
          <h2 className="text-[36px] font-play font-normal text-madeblack text-center mb-[80px]">
            From Top Quality Materials
          </h2>
          <div className="w-[556px] h-[77px] rounded-[40px] bg-[#F6F6F6] mx-auto flex items-center justify-center mb-[40px]">
            <button className="w-[180px] h-[61px] hover:bg-white rounded-[40px] text-[24px] font-inter font-normal text-madeblack">
              Latte
            </button>
            <button className="w-[180px] h-[61px] hover:bg-white rounded-[40px] text-[24px] font-inter font-normal text-madeblack">
              Robusta
            </button>
            <button className="w-[180px] h-[61px] hover:bg-white rounded-[40px] text-[24px] font-inter font-normal text-madeblack">
              Acabica
            </button>
          </div>
          <div className=" grid grid-cols-12 gap-16">
            <div className=" col-span-3">
              <div className=" w-[302px] h-[476px]">
                <img src={coffe1} alt="img" />
                <div className="pl-[24px] pr-[24px]">
                  <h2 className="text-[24px] font-plus font-semibold text-black mt-[16px] mb-[16px]">
                    Chocolate Latte
                  </h2>
                  <div className="flex gap-[8px] items-center mb-[16px]">
                    <h4 className="flex gap-[4px] items-center font-bold font-inter text-madeblack text-[20px]">
                      {" "}
                      <IoIosStar className="text-[30px] pb-1 text-[#FFB31F]" />
                      4.9
                    </h4>
                    <h4 className="text-[16px] font-inter font-normal text-madeblack">
                      (360 reviews)
                    </h4>
                  </div>
                  <p className="text-[16px] font-inter font-normal text-madeblack">
                    Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                    sit dolor fringilla
                  </p>
                  <div className="flex items-center justify-between mt-[16px] mb-[16px]">
                    <h2 className="text-[20px] font-bold text-madeblack font-inter">
                      $2.9
                    </h2>
                    <div className="w-[80px] h-[32px] bg-common rounded-[8px] text-white text-[25px] flex items-center justify-center">
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-3">
              <div className=" w-[302px] h-[476px]">
                <img src={coffe2} alt="img" />
                <div className="pl-[24px] pr-[24px]">
                  <h2 className="text-[24px] font-plus font-semibold text-black mt-[16px] mb-[16px]">
                    Mocha Latte
                  </h2>
                  <div className="flex gap-[8px] items-center mb-[16px]">
                    <h4 className="flex gap-[4px] items-center font-bold font-inter text-madeblack text-[20px]">
                      {" "}
                      <IoIosStar className="text-[30px] pb-1 text-[#FFB31F]" />
                      5.0
                    </h4>
                    <h4 className="text-[16px] font-inter font-normal text-madeblack">
                      (180 reviews)
                    </h4>
                  </div>
                  <p className="text-[16px] font-inter font-normal text-madeblack">
                    Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                    sit dolor fringilla
                  </p>
                  <div className="flex items-center justify-between mt-[16px] mb-[16px]">
                    <h2 className="text-[20px] font-bold text-madeblack font-inter">
                      $2.7
                    </h2>
                    <div className="w-[80px] h-[32px] bg-common rounded-[8px] text-white text-[25px] flex items-center justify-center">
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-3">
              <div className=" w-[302px] h-[476px]">
                <img src={coffe3} alt="img" />
                <div className="pl-[24px] pr-[24px]">
                  <h2 className="text-[24px] font-plus font-semibold text-black mt-[16px] mb-[16px]">
                    Coffee Latte
                  </h2>
                  <div className="flex gap-[8px] items-center mb-[16px]">
                    <h4 className="flex gap-[4px] items-center font-bold font-inter text-madeblack text-[20px]">
                      {" "}
                      <IoIosStar className="text-[30px] pb-1 text-[#FFB31F]" />
                      4.8
                    </h4>
                    <h4 className="text-[16px] font-inter font-normal text-madeblack">
                      (450 reviews)
                    </h4>
                  </div>
                  <p className="text-[16px] font-inter font-normal text-madeblack">
                    Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                    sit dolor fringilla
                  </p>
                  <div className="flex items-center justify-between mt-[16px] mb-[16px]">
                    <h2 className="text-[20px] font-bold text-madeblack font-inter">
                      $2.9
                    </h2>
                    <div className="w-[80px] h-[32px] bg-common rounded-[8px] text-white text-[25px] flex items-center justify-center">
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-3">
              <div className=" w-[302px] h-[476px]">
                <img src={coffe4} alt="img" />
                <div className="pl-[24px] pr-[24px]">
                  <h2 className="text-[24px] font-plus font-semibold text-black mt-[16px] mb-[16px]">
                    Hazelnut Latte
                  </h2>
                  <div className="flex gap-[8px] items-center mb-[16px]">
                    <h4 className="flex gap-[4px] items-center font-bold font-inter text-madeblack text-[20px]">
                      {" "}
                      <IoIosStar className="text-[30px] pb-1 text-[#FFB31F]" />
                      4.9
                    </h4>
                    <h4 className="text-[16px] font-inter font-normal text-madeblack">
                      (390 reviews)
                    </h4>
                  </div>
                  <p className="text-[16px] font-inter font-normal text-madeblack">
                    Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                    sit dolor fringilla
                  </p>
                  <div className="flex items-center justify-between mt-[16px] mb-[16px]">
                    <h2 className="text-[20px] font-bold text-madeblack font-inter">
                      $2.8
                    </h2>
                    <div className="w-[80px] h-[32px] bg-common rounded-[8px] text-white text-[25px] flex items-center justify-center">
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1150px] h-[1px] bg-madeblack mx-auto mt-[80px]"></div>
        </div>
      </section>
    </>
  );
};

export default Products;
