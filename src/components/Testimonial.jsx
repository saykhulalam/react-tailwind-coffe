import React from "react";
import testimg1 from "../assets/test1.png";
import testimg2 from "../assets/test2.png";
import testimg3 from "../assets/test3.png";
import { IoIosStar } from "react-icons/io";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className=" bg-white pt-[80px]">
        <div className="max-w-container mx-auto">
          <div className="mb-[80px]">
            <h4 className="text-[24px] font-inter font-normal text-madeblack text-center">
              Testimonial
            </h4>
            <h2 className="text-[36px] font-play text-black font-normal text-center mt-[8px]">
              What our buyers say
            </h2>
          </div>
          <div className=" grid grid-cols-12 gap-16">
            <div className=" col-span-4">
              <div className="w-[405px] h-[360px] py-[24px] px-[40px]">
                <div className="flex items-center gap-[16px] mb-[16px]">
                  <img src={testimg1} alt="img" />
                  <div className="">
                    <h3 className="text-[20px] font-semibold font-inter text-madeblack">
                      Michael Wong
                    </h3>
                    <div className="flex text-[24px] text-[#FFB31F] gap-[2px]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                  </div>
                </div>
                <p className="text-[20px] font-normal font-inter text-madeblack">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                  sit dolor fringilla volutpat lectus amet. Integer sed pretium
                  odio lectus at malesuada sed eget nunc. Viverra malesuada
                  viverra id vel tortor dui adipiscing.
                </p>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[405px] h-[360px] py-[24px] px-[40px]">
                <div className="flex items-center gap-[16px] mb-[16px]">
                  <img src={testimg2} alt="img" />
                  <div className="">
                    <h3 className="text-[20px] font-semibold font-inter text-madeblack">
                      Avril Song
                    </h3>
                    <div className="flex text-[24px] text-[#FFB31F] gap-[2px]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar className="text-[#D9D9D9]" />
                    </div>
                  </div>
                </div>
                <p className="text-[20px] font-normal font-inter text-madeblack">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                  sit dolor fringilla volutpat lectus amet. Integer sed pretium
                  odio lectus at malesuada sed eget nunc. Viverra malesuada
                  viverra id vel tortor dui adipiscing.
                </p>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[405px] h-[360px] py-[24px] px-[40px]">
                <div className="flex items-center gap-[16px] mb-[16px]">
                  <img src={testimg3} alt="img" />
                  <div className="">
                    <h3 className="text-[20px] font-semibold font-inter text-madeblack">
                      Jeanne Wood
                    </h3>
                    <div className="flex text-[24px] text-[#FFB31F] gap-[2px]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar className="text-[#D9D9D9]" />
                    </div>
                  </div>
                </div>
                <p className="text-[20px] font-normal font-inter text-madeblack">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                  sit dolor fringilla volutpat lectus amet. Integer sed pretium
                  odio lectus at malesuada sed eget nunc. Viverra malesuada
                  viverra id vel tortor dui adipiscing.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1150px] h-[1px] bg-madeblack mx-auto mt-[128px]"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
