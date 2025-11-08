import React from "react";
import PrimaryButton from "../../component/PrimaryButton";

function BestRoutes() {
  return (
    <div className="bg-[#078DD7]/10 p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
      <h2 className="font-bold text-4xl text-center">Our Bus Routes</h2>

      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col lg:flex-row gap-[32px]">
          <div className="bg-white p-[16px] rounded-[10px]">
            <div className="flex items-center">
              <div>
                <img
                  src="images/siraha.jpg"
                  alt="Siraha"
                  className="w-[120px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] ml-[32px] mr-[64px]">
                <p className="font-medium text-[16px]">Kathmandu to Siraha</p>
                <p className="text-black/50">5 Buses</p>
              </div>
              <div>
                <PrimaryButton name={"View All Buses"} />
              </div>
            </div>
          </div>

          <div className="bg-white p-[16px] rounded-[10px]">
            <div className="flex items-center">
              <div>
                <img
                  src="images/siraha.jpg"
                  alt="Siraha"
                  className="w-[120px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] ml-[32px] mr-[64px]">
                <p className="font-medium text-[16px]">Kathmandu to Siraha</p>
                <p className="text-black/50">5 Buses</p>
              </div>
              <div>
                <PrimaryButton name={"View All Buses"} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[32px]">
          <div className="bg-white p-[16px] rounded-[10px]">
            <div className="flex items-center">
              <div>
                <img
                  src="images/siraha.jpg"
                  alt="Siraha"
                  className="w-[120px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] ml-[32px] mr-[64px]">
                <p className="font-medium text-[16px]">Kathmandu to Siraha</p>
                <p className="text-black/50">5 Buses</p>
              </div>
              <div>
                <PrimaryButton name={"View All Buses"} />
              </div>
            </div>
          </div>

          <div className="bg-white p-[16px] rounded-[10px]">
            <div className="flex items-center">
              <div>
                <img
                  src="images/siraha.jpg"
                  alt="Siraha"
                  className="w-[120px] rounded-[10px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] ml-[32px] mr-[64px]">
                <p className="font-medium text-[16px]">Kathmandu to Siraha</p>
                <p className="text-black/50">5 Buses</p>
              </div>
              <div>
                <PrimaryButton name={"View All Buses"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestRoutes;
