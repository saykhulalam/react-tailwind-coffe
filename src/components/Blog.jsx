import React from "react";
import blogimg1 from "../assets/blog1.png";
import blogimg2 from "../assets/blog2.png";
import blogimg3 from "../assets/blog3.png";
import { MdAccountCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";

const Blog = () => {
  return (
    <>
      <section id="blog" className=" bg-white pt-[80px] pb-[80px]">
        <div className="max-w-container mx-auto">
          <div className=" mb-[80px]">
            <h4 className="text-[24px] font-inter font-normal text-madeblack text-center mb-[8px]">
              Blog
            </h4>
            <h2 className="text-[36px] font-play text-black font-normal text-center">
              Read our articles
            </h2>
          </div>
          <div className=" grid grid-cols-12 gap-8 mb-[80px]">
            <div className=" col-span-4">
              <div className="w-[405px] h-[541px] px-[16px] py-[16px] border-[1px] rounded-se-[95px] rounded-es-[50px]">
                <img src={blogimg1} alt="img" />
                <div className="text-areya mt-[16px]">
                  <div className=" flex justify-between">
                    <h2 className="text-[14px] font-inter text-madeblack font-normal flex gap-[8px] items-center">
                      {" "}
                      <MdAccountCircle className="text-[19px]" />
                      John Doe
                    </h2>
                    <h3 className="text-[14px] font-inter text-madeblack font-normal flex gap-[8px] items-center">
                      {" "}
                      <MdDateRange />
                      Feb 23, 2024
                    </h3>
                  </div>
                  <p className="text-[24px] font-semibold font-plus text-[#282A3A] mt-[16px] mb-[16px]">
                    Lorem ipsum dolor sit amet consectetur. Est tempor morbi
                    pellentesque.
                  </p>
                  <button className="flex items-center text-[16px] font-inter text-madeblack gap-[8px] ml-[241px]">
                    View details <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[405px] h-[541px] px-[16px] py-[16px] border-[1px] rounded-se-[95px] rounded-es-[50px]">
                <img src={blogimg2} alt="img" />
                <div className="text-areya mt-[16px]">
                  <div className=" flex justify-between">
                    <h2 className="text-[14px] font-inter text-madeblack font-normal flex gap-[8px] items-center">
                      {" "}
                      <MdAccountCircle className="text-[19px]" />
                      John Doe
                    </h2>
                    <h3 className="text-[14px] font-inter text-madeblack font-normal flex gap-[8px] items-center">
                      {" "}
                      <MdDateRange />
                      Feb 23, 2024
                    </h3>
                  </div>
                  <p className="text-[24px] font-semibold font-plus text-[#282A3A] mt-[16px] mb-[16px]">
                    Lorem ipsum dolor sit amet consectetur. Est tempor morbi
                    pellentesque.
                  </p>
                  <button className="flex items-center text-[16px] font-inter text-madeblack gap-[8px] ml-[241px]">
                    View details <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[405px] h-[541px] px-[16px] py-[16px] border-[1px] rounded-se-[95px] rounded-es-[50px]">
                <img src={blogimg3} alt="img" />
                <div className="text-areya mt-[16px]">
                  <div className=" flex justify-between">
                    <h2 className="text-[14px] font-inter text-madeblack font-normal flex gap-[8px] items-center">
                      {" "}
                      <MdAccountCircle className="text-[19px]" />
                      John Doe
                    </h2>
                    <h3 className="text-[14px] font-inter text-madeblack font-normal flex gap-[8px] items-center">
                      {" "}
                      <MdDateRange />
                      Feb 23, 2024
                    </h3>
                  </div>
                  <p className="text-[24px] font-semibold font-plus text-[#282A3A] mt-[16px] mb-[16px]">
                    Lorem ipsum dolor sit amet consectetur. Est tempor morbi
                    pellentesque.
                  </p>
                  <button className="flex items-center text-[16px] font-inter text-madeblack gap-[8px] ml-[241px]">
                    View details <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-[16px] w-[280px] h-[82px] bg-common text-white font-play text-[24px] font-normal tracking-[4px] justify-center rounded-se-[30px] rounded-es-[30px] mt-[24px] ml-[41%]">
            Read More <GoArrowDownRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;
