import React from "react";
import HeroImg from "../assets/hero.webp";
import Profile from "../assets/Profile.jpg";
import Calendar from "../assets/calendar.png";
import Dropdown from "../assets/down-arrow.png";
import Left from "../assets/arrow-left.png";
import Right from "../assets/arrow-right.png";
import Recordings from "../assets/recordings.png";
import Schedule from "../assets/schedule.png";
import Add from "../assets/add.png";
import Video from "../assets/video.svg";
import Video2 from "../assets/Video2.svg";

const Hero = () => {
  return (
    <div className="w-full">
      <img src={HeroImg} alt="image" className="h-32 w-screen" />
      <div className="grid grid-cols-10 ml-8 gap-8">
        <div className="col-span-3 bg-white h-64 w-52 -translate-y-8 rounded-md shadow-lg">
          <img
            src={Profile}
            alt="Profile"
            className="w-20 h-20 mt-8 mx-16 rounded-md"
          />
          <div className="flex flex-col font-thin text-xs p-2 items-center mt-1">
            <p className="font-bold text-xl mt-2">Prabhleen Kaur</p>
            <p className="mt-2">prabhleen@gmail.com</p>
            <p>9890211111</p>
            <p className="mt-2">Delhi, India</p>
          </div>
        </div>
        <div className="col-span-7 -translate-x-10">
          <p className="text-lg p-2">November 5, 2024</p>
          <p className="font-bold text-3xl pl-2">Hello, Asim Ramdurg</p>
        </div>
      </div>
      <div className="flex justify-center w-full translate-x-28 -translate-y-32">
        <div className="border-2  bg-white h-[420px] w-1/2 ml-3 rounded-md shadow-lg">
          <div className="flex justify-between bg-slate-200 w-12/13 h-8 mt-3 mx-5 rounded-md items-center">
            <div className="flex">
              <img
                src={Calendar}
                alt=""
                className="h-4 w-4 m-2 cursor-pointer"
              />
              <p className="m-1">Monday, 5 November 2024</p>
              <img
                src={Dropdown}
                alt="down-arrow"
                className="h-6 w-6 m-1 cursor-pointer"
              />
            </div>
            <div className="h-5 w-14 flex justify-between mr-2 opacity-50">
              <img src={Left} alt="" className="h-5 w-5 cursor-pointer" />
              <img src={Right} alt="" className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
          <div className="flex">
            <div className="flex font-semibold text-xl items-center ml-8">
              11.30 AM
            </div>
            <div className="w-0.5 h-16 bg-teal-400 m-2"></div>
            <div className="m-4">
              <p className="flex text-base font-normal text-slate-400 ">
                Live <img src={Video} alt="" className="h-4 w-5 ml-2 mt-1" />
              </p>

              <p className="font-semibold text-2xl">UX Webinar</p>
            </div>
          </div>
          <div className="w-11/12 ml-5 h-0.5">
            <hr />
          </div>
          <div className="flex">
            <div className="flex font-semibold text-xl items-center ml-8">
              11.30 AM
            </div>
            <div className="w-0.5 h-16 bg-teal-400 m-2"></div>
            <div className="m-4">
              <p className="flex text-base font-normal text-slate-400 ">
                Upcoming{" "}
                <img src={Video2} alt="" className="h-4 w-5 ml-2 mt-1" />
              </p>

              <p className="font-semibold text-2xl">UX Webinar</p>
            </div>
          </div>
          <div className="w-11/12 ml-5 h-0.5">
            <hr />
          </div>
          <div className="flex">
            <div className="flex font-semibold text-xl items-center ml-8">
              11.30 AM
            </div>
            <div className="w-0.5 h-16 bg-teal-400 m-2"></div>
            <div className="m-4">
              <p className="flex text-base font-normal text-slate-400 ">
                Upcoming{" "}
                <img src={Video2} alt="" className="h-4 w-5 ml-2 mt-1" />
              </p>

              <p className="font-semibold text-2xl">UX Webinar</p>
            </div>
          </div>
          <div className="w-11/12 ml-5 h-0.5">
            <hr />
          </div>
          <div className="flex">
            <div className="flex font-semibold text-xl items-center ml-8">
              11.30 AM
            </div>
            <div className="w-0.5 h-16 bg-teal-400 m-2"></div>
            <div className="m-4">
              <p className="flex text-base font-normal text-slate-400 ">
                Upcoming{" "}
                <img src={Video2} alt="" className="h-4 w-5 ml-2 mt-1" />
              </p>

              <p className="font-semibold text-2xl">UX Webinar</p>
            </div>
          </div>
          <div className="w-11/12 ml-5 h-0.5">
            <hr />
          </div>
        </div>

        <div className="border-2 h-60 w-80 rounded-md shadow-lg bg-white translate-x-5 grid grid-cols-8">
          <div className="col-span-4 m-8">
            <img src={Schedule} alt="schedule webinar" className="h-12 w-12" />
            <p className="-ml-2">Schedule</p>
          </div>
          <div className="col-span-4 mt-8 ml-16">
            <img src={Add} alt="Add a webinar" className="h-10 w-10" />
            <p className="m-2">Add</p>
          </div>
          <div className="col-span-4 ml-8 mb-8">
            <img src={Recordings} alt="recordings" className="h-12 w-12" />
            <p className="-ml-2">Recordings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
