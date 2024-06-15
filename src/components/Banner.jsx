import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import bannerimg1 from "../assets/banner1.png";
import bannerimg2 from "../assets/banner2.png";
import bannerimg3 from "../assets/banner3.png";
import bannerimg4 from "../assets/banner4.png";
import bannerimg5 from "../assets/banner5.png";

const Banner = () => {
  return (
    <>
      <section id="banner" className=" bg-white pb-[80px] pt-[80px]">
        <div className="max-w-container mx-auto px-3">
          <div className=" mb-[80px]">
            <h1 className="text-[64px] font-medium text-madeblack font-play text-center mb-[24px]">
              Enjoy Your Favorite <br /> Coffee with Ngopi
            </h1>
            <p className="text-[24px] font-inter font-normal text-madeblack text-center mb-[24px]">
              Discover tranquility at Ngopi a sanctuary for unwinding, <br />{" "}
              where your evenings are perfected with relaxation and rich
              flavors.
            </p>
            <button className="flex items-center gap-[16px] xl:w-[363px] h-[82px] bg-common text-white font-play text-[24px] font-normal tracking-[4px] justify-center rounded-se-[30px] rounded-es-[30px] xl:ml-[35%] lg:ml-[35%] ml-10 px-4">
              Explore product <GoArrowDownRight />
            </button>
          </div>
          <div className=" grid grid-cols-10 gap-4">
            <div className=" xl:col-span-2 col-span-5 lg:col-span-2 ">
              <img src={bannerimg1} alt="bannerimg" />
            </div>
            <div className=" xl:col-span-2 col-span-5 lg:col-span-2 ">
              <img src={bannerimg2} alt="bannerimg" />
            </div>
            <div className=" xl:col-span-2 col-span-5 lg:col-span-2 ">
              <img src={bannerimg3} alt="bannerimg" />
            </div>
            <div className=" xl:col-span-2 col-span-5 lg:col-span-2 ">
              <img src={bannerimg4} alt="bannerimg" />
            </div>
            <div className=" xl:col-span-2 col-span-5 lg:col-span-2 ">
              <img src={bannerimg5} alt="bannerimg" />
            </div>
          </div>
          <div className="xl:w-[1100px] h-[2px] bg-madeblack mx-auto mb-[80px] mt-[80px]"></div>
          <div className="flex justify-between w-[1000px] mx-auto xl:flex-row flex-col sm:flex-row">
            <div className="">
              <h2 className="text-[64px] font-inter font-normal text-madeblack">
                30+
              </h2>
              <p className="text-[24px] font-play font-normal text-madeblack">
                Coffee Variant
              </p>
            </div>
            <div className="w-[100px] h-[2px] bg-madeblack xl:rotate-90 sm:rotate-90 mt-[70px]"></div>
            <div className="">
              <h2 className="text-[64px] font-inter font-normal text-madeblack">
                20+
              </h2>
              <p className="text-[24px] font-play font-normal text-madeblack">
                Meeting room
              </p>
            </div>
            <div className="w-[100px] h-[2px] bg-madeblack xl:rotate-90 sm:rotate-90 mt-[70px]"></div>
            <div className="">
              <h2 className="text-[64px] font-inter font-normal text-madeblack">
                25+
              </h2>
              <p className="text-[24px] font-play font-normal text-madeblack">
                Event space
              </p>
            </div>
            <div className="w-[100px] h-[2px] bg-madeblack xl:rotate-90 sm:rotate-90 mt-[70px]"></div>
            <div className="">
              <h2 className="text-[64px] font-inter font-normal text-madeblack">
                40+
              </h2>
              <p className="text-[24px] font-play font-normal text-madeblack">
                Global Achievement
              </p>
            </div>
          </div>
          <div className="xl:w-[1100px] h-[2px] bg-madeblack mx-auto mt-[80px]"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
