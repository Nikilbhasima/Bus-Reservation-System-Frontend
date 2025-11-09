import React from "react";
import RegistrationPage from "./registrationPage";
import { useParams } from "react-router-dom";
import LoginPage from "./loginPage";

function Authentication() {
  const { condition } = useParams();
  return (
    <div className="grid lg:grid-cols-[500px_500px] rounded-[10px] w-fit overflow-hidden shadow-md mx-auto mt-[32px] mb-[32px]">
      <div
        className="relative bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/images/banner.png")' }}
      >
        <div className="h-full flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-[64px] font-bold">Bus Yatra</h2>
          <p className="mt-2 text-[16px]">
            Booking Made Simple, Journeys <br /> Made Memorable
          </p>
        </div>
      </div>
      <div>
        {condition === "register" && <RegistrationPage />}
        {condition === "login" && <LoginPage />}
      </div>
    </div>
  );
}

export default Authentication;
