import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <video
        src="https://d2lptvt2jijg6f.cloudfront.net/jindalsteelpower/custom/1611227461_Landing%20Pg11Jan.mp4"
        autoPlay
        muted
        loop
        className="absolute z-[100]  top-[0] left-[0] 
      h-full w-[100%] "
      ></video>
      {/* navbar */}
      <div className="w-full h-full relative flex items-center flex-col">
        <div className="w-[80%] z-[1000] relative py-[50px] flex flex-row justify-center items-center gap-5 mx-auto">
          <img src={logo} alt="" />
          <div className="flex flex-row font-bold gap-8 pl-[30px] items-end h-[100px]">
            <div className="text-white cursor-pointer ">About Us</div>
            <div className="text-white cursor-pointer ">Businesses</div>
            <div className="text-white cursor-pointer ">Products</div>
            <div className="text-white cursor-pointer">People</div>
            <div className="text-white cursor-pointer">Investors & Media</div>
            <div className="text-white cursor-pointer ">Sustainbility</div>
            <div className="text-white cursor-pointer ">Community</div>
          </div>
        </div>
        <Link
          to="/location-card"
          className="flex mt-[300px] flex-row items-center justify-center text-white border-white w-[400px] border-[1px] text-[50px] bg-black cursor-pointer duration-500 hover:scale-90 z-[1000]"
        >
          Location Cards
        </Link>
      </div>
    </>
  );
};

export default HomePage;
