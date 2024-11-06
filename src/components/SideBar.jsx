import React from "react";
import Profile from "../assets/Profile.jpg";
import Home from "../assets/home.svg";
import Webinars from "../assets/webinar.svg";
import Billing from "../assets/billing.svg";
import User from "../assets/users.svg";
import Settings from "../assets/settings.svg";

const SideBar = () => {
  return (
    <div className="h-full w-60 shadow-2xl border-2">
      <div className="flex justify-between px-3 py-5">
        <div className="flex border-1 bg-blue-500 p-2 rounded-md cursor-pointer">
          <p className="text-white">Webinar</p>
          <p className="text-teal-300">.gg</p>
        </div>

        <div>
          <img
            className="h-10 w-10 rounded-md cursor-pointer"
            src={Profile}
            alt="Profile"
          />
        </div>
      </div>

      <div className="flex justify-between p-2 cursor-pointer hover:bg-slate-300">
        <p className="m-1">Home</p>
        <img src={Home} alt="Home" className="h-6 w-6 mr-2" />
      </div>
      <div className="flex justify-between p-2 cursor-pointer hover:bg-slate-300">
        <p className="m-1">Webinars</p>
        <img src={Webinars} alt="" className="h-6 w-6 mr-2" />
      </div>
      <div className="flex justify-between p-2 cursor-pointer hover:bg-slate-300">
        <p className="m-1">Billing</p>
        <img src={Billing} alt="" className="h-6 w-6 mr-2" />
      </div>
      <div className="flex justify-between p-2 cursor-pointer hover:bg-slate-300">
        <p className="m-1">User Management</p>
        <img src={User} alt="" className="h-6 w-6 mr-2" />
      </div>
      <div className="flex justify-between p-2 cursor-pointer hover:bg-slate-300">
        <p className="m-1">Settings</p>
        <img src={Settings} alt="" className="h-6 w-6 mr-2" />
      </div>
    </div>
  );
};

export default SideBar;
