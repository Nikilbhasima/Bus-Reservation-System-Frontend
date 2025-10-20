import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";

function AgencyMain() {
  return (
    <div className="grid grid-cols-[auto_1fr]   h-screen relative">
      <div className="bg-[yellow] relative h-full">
        <Navbar />
      </div>
      <div className="bg-[brown]">
        <Header />
      </div>
    </div>
  );
}

export default AgencyMain;
