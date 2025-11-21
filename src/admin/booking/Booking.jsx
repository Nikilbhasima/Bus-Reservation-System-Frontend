import Button from "@mui/material/Button";
import React from "react";

function Booking() {
  return (
    <>
      <h2 className="font-bold text-[32px]">Recent Booking</h2>
      <div className="max-h-[38rem] sm:max-h-[36rem] lg:max-h-[36rem]  overflow-y-auto relative  mt-[8px]">
        <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
          <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#D9D9D9] sticky top-0 ">
            <tr className="rounded-[12px] ">
              <th className="pl-[8px] font-medium ">Customer Name</th>
              <th className="py-[8px] font-medium ">Route </th>
              <th className="py-[8px] font-medium ">Travel Date</th>
              <th className="py-[8px] font-medium hidden sm:table-cell">
                Seats
              </th>
              <th className="py-[8px] font-medium hidden sm:table-cell">
                Amount
              </th>
              <th className="pr-[8px] font-medium ">Status</th>
            </tr>
          </thead>

          <tbody className="bg-[#EBEBEB]">
            <tr>
              <td>Saliv Maharjan</td>
              <td>Kathmandu-Pokhara</td>
              <td>2025/11/18</td>
              <td className="hidden sm:table-cell">2</td>
              <td className="hidden sm:table-cell">Rs.2400</td>
              <td>
                <select className="outline-none">
                  <option value="Confirmend">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Booking;
