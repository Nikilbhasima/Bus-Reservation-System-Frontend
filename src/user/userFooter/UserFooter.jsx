import React from "react";

const UserFooter = () => {
  return (
    <div className="w-full p-[32px] bg-[#078DD7] text-white mt-auto">
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-3 md:grid-rows-2 
          lg:grid-cols-5 lg:grid-rows-1 
          gap-[32px]
        "
      >
        <div className="flex flex-col gap-[8px] items-center">
          <div className="font-bold text-[24px] text-center">BUS YATRA</div>
          <div>
            Bus Yatra is an online bus reservation system designed to make
            booking tickets faster, easier, and more reliable for travelers.
          </div>
        </div>

        <div className="flex flex-col gap-[8px] items-center">
          <div className="font-bold text-[24px] text-center">QUICK LINKS</div>
          <ul>
            <li>Home</li>
            <li>Book Ticket</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>My Trips</li>
          </ul>
        </div>

        <div className="flex flex-col gap-[8px] items-center">
          <div className="font-bold text-[24px] text-center">TOP ROUTES</div>
          <div>
            <div>Kathmandu - Siraha</div>
            <div>Kathmandu - Arghakhanchi</div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] items-center md:col-span-1 lg:col-span-1">
          <div className="font-bold text-[24px] text-center">OPERATORS</div>
          <ul>
            <li>Deurali Yatayat</li>
            <li>ArghaBhagwati Yatayat</li>
            <li>Shiv Shakti AC</li>
            <li>Pashupati Darshan</li>
          </ul>
        </div>

        <div className="flex flex-col gap-[8px] items-center md:col-span-1 lg:col-span-1">
          <div className="font-bold text-[24px] text-center">CONTACT INFO</div>
          <div>
            <div>+977 9866445340</div>
            <div>info.busyatra@gmail.com</div>
            <div>Kathmandu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
