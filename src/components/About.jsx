import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import aboutimg1 from "../assets/why1.png";
import aboutimg2 from "../assets/why2.png";

const About = () => {
  return (
    <>
      <section id="about" className=" bg-white">
        <div className="max-w-container mx-auto px-3">
          <div className=" mb-[80px]">
            <h4 className="text-[24px] font-inter font-normal text-madeblack text-center mb-[8px]">
              About us
            </h4>
            <h2 className="text-[36px] font-play text-black font-normal text-center">
              Why we are the best
            </h2>
          </div>
          <div className=" flex gap-[100px] items-center xl:flex-row flex-col">
            <div className=" xl:w-[50%]">
              <p className="text-[20px] font-inter font-normal text-madeblack text-justify mb-[24px]">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc. Viverra malesuada viverra id
                vel tortor dui adipiscing.
              </p>
              <p className="text-[20px] font-inter font-normal text-madeblack text-justify mb-[24px]">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc.
              </p>
              <p className="text-[20px] font-inter font-normal text-madeblack text-justify">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet.
              </p>
              <button className="flex items-center gap-[16px] w-[280px] h-[82px] bg-common text-white font-play text-[24px] font-normal tracking-[4px] justify-center rounded-se-[30px] rounded-es-[30px] mt-[24px]">
                Read More <GoArrowDownRight />
              </button>
            </div>
            <div className=" ">
              <div className="flex xl:flex-row flex-col sm:flex-row lg:flex-row items-center gap-6">
                <img className="mt-16" src={aboutimg1} alt="img" />
                <img className="w-[250px] mb-16" src={aboutimg2} alt="img" />
              </div>
            </div>
          </div>
          <div className="xl:w-[1150px] h-[1px] bg-madeblack mx-auto mt-[80px]"></div>
        </div>
      </section>
    </>
  );
};

export default About;
