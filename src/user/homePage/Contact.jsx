import React from "react";
import PrimaryButton from "../../component/PrimaryButton";
import TextFieldComponent from "../../component/TextFieldComponent";

function Contact() {
  return (
    <div className="p-[32px] md:p-[60px] flex flex-col items-center justify-center">
      <h2 className="font-bold text-4xl text-center">Contact Us</h2>
      <div className="flex flex-col gap-[16px] w-full md:w-[620px] mt-[32px]">
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor="email">Name</label>
            <TextFieldComponent name={"name"} type="text" />
          </div>

          <div className="flex flex-col gap-[8px]  w-full">
            <label htmlFor="email">Email</label>
            <TextFieldComponent name={"email"} type="email" />
          </div>
        </div>

        <div className="flex flex-col gap-[8px] mb-[16px]">
          <label htmlFor="email">Message</label>
          <textarea
            className="border border-gray-500/50 p-[8px] rounded-[6px]"
            placeholder="Leave Your Message"
            rows="5"
          />
        </div>

        <PrimaryButton name={"Submit Request"} />
      </div>
    </div>
  );
}

export default Contact;
