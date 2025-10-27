import React from "react";
import { FaPlus } from "react-icons/fa";
import PrimaryButton from "../../component/PrimaryButton";

function DriverDetail2() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px]">Drivers</h2>
        <PrimaryButton name={`Add Driver`} width={true} />
      </div>
      <table className="w-full mt-[8px] text-center border-separate border-spacing-y-[16px]">
        <thead className="text-[12px] md:text-[16px] lg:text-[22px]">
          <tr className="rounded-[12px] bg-[#D9D9D9]">
            <th className="pl-[8px] font-medium">Photo</th>
            <th className="py-[8px] font-medium">Driver</th>
            <th className="py-[8px] font-medium hidden sm:table-cell">Email</th>
            <th className="py-[8px] font-medium">Phone</th>
            <th className="pr-[8px] font-medium">Detail</th>
          </tr>
        </thead>
        <tbody className="bg-[#EBEBEB] text-[12px] md:text-[16px] lg:text-[22px]">
          <tr>
            <td className="pl-[8px] py-[8px] font-light flex justify-center">
              <img
                src="images/aakash.jpg"
                className="w-[50px] h-[50px] rounded-[100%] object-cover object-top"
              />
            </td>
            <td className="py-[8px] font-light">Aakash Kumar Sah</td>
            <td className="py-[8px] font-light hidden sm:table-cell">
              aakasah@gmail.com
            </td>
            <td className="py-[8px] font-light">+977 9866445533</td>
            <td className="pr-[8px] font-light">
              <PrimaryButton name={"Detail"} width={true} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DriverDetail2;
