import React from "react";
import footerlogo from "../assets/footerlogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section id="footer" className=" bg-[#282A3A] pt-[80px] pb-[80px]">
        <div className="max-w-container mx-auto">
          <div className=" grid grid-cols-12 gap-[70px]">
            <div className=" col-span-4">
              <img src={footerlogo} alt="logo" />
              <p className=" text-white font-inter font-normal mt-[32px] text-[20px]">
                Discover tranquility at Ngopi a sanctuary for unwinding, where
                your evenings are perfected with relaxation and rich flavors.
              </p>
              <h2 className="text-[20px] text-white font-inter mt-[32px]">
                hello@ngopi.com
              </h2>
              <h2 className="text-[20px] text-white font-inter">
                Phone : +01 23456789
              </h2>
            </div>
            <div className=" col-span-8">
              <div className=" grid grid-cols-12">
                <div className=" col-span-4">
                  <h2 className="text-[28px] text-white font-play font-normal mb-[24px]">
                    Quick Links
                  </h2>
                  <ul className="text-[16px] font-inter text-white font-normal">
                    <li className="mb-[16px]">
                      <a href="#">Services</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Portfolio</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">About us</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Testimonial</a>
                    </li>
                  </ul>
                </div>
                <div className=" col-span-4">
                  <h2 className="text-[28px] text-white font-play font-normal mb-[24px]">
                    Resources
                  </h2>
                  <ul className="text-[16px] font-inter text-white font-normal">
                    <li className="mb-[16px]">
                      <a href="#">Support</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
                <div className=" col-span-4">
                  <h2 className="text-[28px] text-white font-play font-normal mb-[24px]">
                    Social Media
                  </h2>
                  <ul className="flex gap-[8px]">
                    <li className=" w-[48px] h-[48px] bg-[#ffffff3c] rounded-[5px] text-[25px] text-white flex items-center justify-center">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className=" w-[48px] h-[48px] bg-[#ffffff3c] rounded-[5px] text-[25px] text-white flex items-center justify-center">
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li className=" w-[48px] h-[48px] bg-[#ffffff3c] rounded-[5px] text-[25px] text-white flex items-center justify-center">
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li className=" w-[48px] h-[48px] bg-[#ffffff3c] rounded-[5px] text-[25px] text-white flex items-center justify-center">
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className=" w-[48px] h-[48px] bg-[#ffffff3c] rounded-[5px] text-[25px] text-white flex items-center justify-center">
                      <a href="#">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h2 className="text-[28px] text-white font-play font-normal mb-[24px] mt-[40px]">
                  Subscribe
                </h2>
                <div className=" relative">
                  <input
                    className="w-[835px] h-[78px] bg-[#ffffff3c] rounded-[16px] text-[20px] font-inter font-normal text-white pl-[62px]"
                    type="email"
                    placeholder="name@domain.com"
                  />
                  <MdOutlineEmail className=" text-[30px] text-white absolute top-[22px] left-[22px]" />
                  <button className="w-[179px] h-[62px] bg-common rounded-[8px] text-[20px] text-white font-inter font-normal absolute right-[4px] top-[7px]">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =========end======= */}
      </section>
    </>
  );
};

export default Footer;
