import React from "react";
import PrimaryButton from "../../component/PrimaryButton";
import TextFieldComponent from "../../component/TextFieldComponent";
import ContactUsPage from "../contactUsPage/ContactUsPage";
import { FaStar } from "react-icons/fa";

function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="p-[32px] md:p-[60px] bg-[url(images/hero-img.png)] bg-center bg-cover flex flex-col md:flex-row md:justify-between">
        <div className="text-white mb-[32px] flex flex-col">
          <h2 className="font-bold text-4xl lg:text-[48px] md:w-[80%] mb-[8px]">
            Travel Well And Easy With Us
          </h2>
          <p className="font-medium text-lg md:w-[80%] mb-[16px]">
            Seamless reservations, comfortable journeys, and trusted service.
          </p>
          <PrimaryButton name="Explore More" width={true} />
        </div>

        <div className="p-[32px] bg-[#FFFFFF] rounded-[10px] md:w-[420px] lg:w-[520px]">
          <div>
            <h2 className="text-xl font-bold text-center">Book a Ride</h2>
          </div>

          <div className="flex flex-col gap-[16px]">
            <div>
              <label htmlFor="from">From</label>
              <TextFieldComponent name={"from"} type="text" />
            </div>

            <div>
              <label htmlFor="to">To</label>
              <TextFieldComponent name={"to"} type="text" />
            </div>

            <div className="flex flex-col lg:flex-row gap-[4px]">
              <div>
                <label htmlFor="depDate">Departure Date</label>
                <TextFieldComponent name={"depDate"} type="date" />
              </div>

              <div>
                <label htmlFor="retDate">Return Date</label>
                <TextFieldComponent name={"retDate"} type="date" />
              </div>
            </div>

            <div>
              <label htmlFor="pickup">Pickup Location</label>
              <TextFieldComponent name={"pickup"} type="text" />
            </div>

            <PrimaryButton name={"Search Ticket"} />
          </div>
        </div>
      </div>

      {/* Our Bus Route */}
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

      {/* Why Choose Us */}
      <div className="p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
        <h2 className="font-bold text-4xl">Why Choose Us?</h2>

        <p className="font-medium text-center text-black/50 mb-[16px]">
          Experience the best bus travel service in Nepal with our premium
          features
        </p>

        <div className="flex flex-col md:flex-row md:justify-between gap-[16px] md:gap-[80px] lg:gap-[160px]">
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <img
              src="images/safe-icon.svg"
              alt="safe"
              className="w-[120px] md:w-[160px]"
            />
            <p className="font-medium text-black/50">Safe Travels</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <img
              src="images/cashless-icon.svg"
              alt="safe"
              className="w-[120px] md:w-[160px]"
            />
            <p className="font-medium text-black/50">Online Transaction</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <img
              src="images/customer.svg"
              alt="safe"
              className="w-[120px] md:w-[160px]"
            />
            <p className="font-medium text-black/50">24/7 Support</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <img
              src="images/location.svg"
              alt="safe"
              className="w-[120px] md:w-[160px]"
            />
            <p className="font-medium text-black/50">Live Tracking</p>
          </div>
        </div>
      </div>

      {/* Trusted Travel Agency */}
      <div className="bg-[#078DD7]/10 p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
        <h2 className="font-bold text-4xl text-center">
          Our Trusted Travel Agencies
        </h2>
        <p className="font-medium text-center text-black/50 mb-[16px]">
          Our bus partnership with following company ensures safe and reliable
          travel for all passengers.
        </p>

        <div className="flex flex-col md:flex-row md:justify-between gap-[16px] md:gap-[80px] lg:gap-[160px]">
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <img
              src="images/bus.png"
              alt="safe"
              className="w-[220px] object-contain md:w-[320px]"
            />
            <p className="font-medium text-black/50">Ambikeshwori Yatayat</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-[8px]">
            <img
              src="images/bus.png"
              alt="safe"
              className="w-[220px] object-contain md:w-[320px]"
            />
            <p className="font-medium text-black/50">Ambikeshwori Yatayat</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-[8px]">
            <img
              src="images/bus.png"
              alt="safe"
              className="w-[220px] object-contain md:w-[320px]"
            />
            <p className="font-medium text-black/50">Ambikeshwori Yatayat</p>
          </div>
        </div>

        <div className="mt-[32px]">
          <PrimaryButton name={"View All Agencies"} />
        </div>
      </div>

      {/* What Our Customer Says */}
      <div className="p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[16px] ">
        <h2 className="font-bold text-4xl text-center">
          What Our Customer Says
        </h2>

        <p className="font-medium text-center text-black/50 mb-[16px]">
          Here’s what our passengers thought about their booking experience.
        </p>

        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[64px]">
          <div className="flex flex-col gap-[16px] shadow-lg p-[16px] rounded-tl-[30px] rounded-br-[30px]">
            <div className="flex gap-[8px]">
              <div>
                <img src="images/nikil.png" alt="Nikil" className="w-[60px]" />
              </div>
              <div>
                <p className="text-[18px] font-medium">Nikil Bhasima</p>
                <div className="flex gap-[8px] text-[22px]">
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                </div>
              </div>
            </div>
            <div className="text-justify">
              "Excellent service! The Green Line bus was clean, comfortable, and
              arrived right on time. The scenic views during the journey were
              breathtaking."
            </div>
          </div>

          <div className="flex flex-col gap-[16px] shadow-lg p-[16px] rounded-tl-[30px] rounded-br-[30px]">
            <div className="flex gap-[8px]">
              <div>
                <img src="images/nikil.png" alt="Nikil" className="w-[60px]" />
              </div>
              <div>
                <p className="text-[18px] font-medium">Nikil Bhasima</p>
                <div className="flex gap-[8px] text-[22px]">
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                </div>
              </div>
            </div>
            <div className="text-justify">
              "Excellent service! The Green Line bus was clean, comfortable, and
              arrived right on time. The scenic views during the journey were
              breathtaking."
            </div>
          </div>

          <div className="flex flex-col gap-[16px] shadow-lg p-[16px] rounded-tl-[30px] rounded-br-[30px]">
            <div className="flex gap-[8px]">
              <div>
                <img src="images/nikil.png" alt="Nikil" className="w-[60px]" />
              </div>
              <div>
                <p className="text-[18px] font-medium">Nikil Bhasima</p>
                <div className="flex gap-[8px] text-[22px]">
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                  <FaStar color="yellow" />
                </div>
              </div>
            </div>
            <div className="text-justify">
              "Excellent service! The Green Line bus was clean, comfortable, and
              arrived right on time. The scenic views during the journey were
              breathtaking."
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="bg-[#078DD7]/10 p-[32px] md:p-[60px] flex flex-col items-center justify-center gap-[32px] ">
        <h2 className="font-bold text-4xl text-center">
          Ready to Explore Nepal?
        </h2>
        <p className="font-medium text-center text-black/50 mb-[16px]">
          Book your bus tickets now and embark on an unforgettable journey
          through the beautiful landscapes of Nepal
        </p>
        <PrimaryButton name={"Boook your ticket now"} width={"w-fit"} />
      </div>

      {/* Contact Us */}
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
    </>
  );
}

export default HomePage;
