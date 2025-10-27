import React from "react";
import PrimaryButton from "../../component/PrimaryButton";
import { FaPlus } from "react-icons/fa";
function BusDetail2() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[28px] font-medium">Bus</h2>
        <PrimaryButton name="Add Bus" width={true} icon={<FaPlus />} />
      </div>
    </>
  );
}

export default BusDetail2;
