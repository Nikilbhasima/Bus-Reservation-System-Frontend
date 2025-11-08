import React from "react";
import TextFieldComponent from "../../component/TextFieldComponent";
import PrimaryButton from "../../component/PrimaryButton";

const contentData = [
  {
    heading: "Real - Time Bus Tracking",
    content:
      " Track your bus location live and get accurate arrival times with our GPS-enabled tracking system.",
    image: "images/svg/location.svg",
  },
  {
    heading: " Instant Ticket Booking",
    content:
      "  Book your seats in seconds with our user-friendly interface and instant confirmation system.",
    image: "images/svg/ticket.svg",
  },
  {
    heading: " Smart Notification",
    content:
      "  Get timely alerts about departure, delays, boarding points, and arrival notifications.",
    image: "images/svg/notification.svg",
  },
  {
    heading: "Safe & Hassle-free Journey",
    content:
      "  Travel with confidence on our verified bus partners with insurance coverage and 24/7 support.tent",
    image: "images/svg/bus.svg",
  },
  {
    heading: "  Secure Online Payment",
    content:
      "  Pay safely with multiple payment options including cards, mobile banking, and digital wallets.",
    image: "images/svg/secure.svg",
  },
];
function ContactUsPage() {
  return (
    <>
      <div className="p-[32px] lg:p-[60px] flex flex-col md:flex-row gap-[32px]">
        <div className="flex flex-col gap-[16px] md:w-[50%]">
          <div>
            <h2 className="font-bold text-[32px]">Why you should join us?</h2>
          </div>
          {contentData.map((data, index) => (
            <div
              key={index}
              className="p-[8px] flex gap-[16px] items-center rounded-[10px] shadow-[2px_4px_6px_0px_rgba(59,_130,_246,_0.5)]"
            >
              <div>
                <img src={data?.image} alt="icon" className="w-[50px]" />
              </div>
              <div className="flex flex-col gap-[8px] sm:gap-[8px]">
                <h2 className="font-medium text-[18px] lg:text-[20px]">
                  {data?.heading}
                </h2>
                <p className="text-black/50 text-[12px] max-w-[397px]">
                  {data?.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-[50%]">
          <div className="p-[16px] flex flex-col gap-[16px] shadow-[2px_4px_6px_0px_rgba(59,_130,_246,_0.5)] rounded-[12px]">
            <h2 className="font-bold text-[28px]">Get Started Today</h2>
            <p className="text-black/50">
              Ready to experience the future of bus travel? Contact us and join
              thousands of satisfied customers.
            </p>
            <div className="flex flex-col gap-[16px]">
              <div>
                <TextFieldComponent
                  type="text"
                  placeholder="Input Field Name"
                />
              </div>
              <div>
                <TextFieldComponent
                  type="text"
                  placeholder="Input Your Email"
                />
              </div>
              <div>
                <TextFieldComponent
                  type="text"
                  placeholder="Input Your Number"
                />
              </div>
              <div>
                <select className="border border-gray-500/50 p-[8px] rounded-[6px] w-full">
                  <option value={""}> -- Select Inquiry Type --</option>
                  <option value={"help"}>Help & Support</option>
                  <option value={"business"}>Business</option>
                </select>
              </div>
              <div className="flex flex-col">
                <textarea
                  className="border border-gray-500/50 p-[8px] rounded-[6px]"
                  placeholder="Leave Your Message"
                  rows="5"
                />
              </div>
              <div className="mt-[16px]">
                <PrimaryButton name={"Submit Inquiry"} width={"w-fit"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
