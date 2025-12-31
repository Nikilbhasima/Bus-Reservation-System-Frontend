import React from "react";
import PrimaryButton from "../../component/PrimaryButton";

function Info() {
  return (
    <div className="bg-[hsl(197,70%,88%)] p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[32px] ">
      <h2 className="font-bold text-4xl text-center">
        Ready to Explore Nepal?
      </h2>
      <p className="font-medium text-center text-black/50 mb-[16px]">
        Book your bus tickets now and embark on an unforgettable journey through
        the beautiful landscapes of Nepal
      </p>
      <PrimaryButton name={"Boook your ticket now"} width={"w-fit"} />
    </div>
  );
}

export default Info;
