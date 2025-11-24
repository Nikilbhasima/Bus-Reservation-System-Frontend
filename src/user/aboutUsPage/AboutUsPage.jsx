import React from "react";

function AboutUsPage() {
  return (
    <div>
      <div className="flex bg-[#078DD7]/10">
        <div className="p-[24px] md:p[48px] lg:p-[60px] flex flex-col gap-[16px]  md:flex  md:flex-row max-w-[1440px] md:items-center mx-auto">
          <div className="flex flex-col gap-[8px] items-center lg:items-start md:w-[50%]">
            <h2 className="text-[32px] md:text-[28px] lg:text-[50px] font-normal ">
              Our Bus Reservation System
            </h2>
            <p className="text-justify lg:text-[20px] font-light opacity-50 lg:w-[80%]">
              Our Bus Reservation makes booking tickets simple, fast , and
              reliable. We aim to provide passengers with a comfortable travel
              experience and operators with an efficient management solutions.
            </p>
          </div>
          <div className="flex justify-center md:w-[50%]">
            <img
              src="images/bus5.png"
              alt="about-header-img"
              className="w-[338px] md:w-[448px] lg:w-[600px] "
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="p-[24px] md:p[48px] lg:p-[60px] flex flex-col items-center gap-[16px] lg:gap-[24px] max-w-[1440px] mx-auto">
          <div className="w-full">
            <h2 className="text-[24px] lg:text-[38px] text-center font-bold">
              "Why Shoud You Choose Bus Yatra"
            </h2>
          </div>
          <div className="md:flex lg:w-full">
            <div className="flex flex-col gap-[16px] lg:gap-[24px] lg:w-[50%]">
              <div className="flex flex-col lg:flex-row gap-[8px] items-center text-center lg:text-start">
                <div className="lg:w-[10%]">
                  <img
                    src="images/safe-icon.svg"
                    alt="safe"
                    className="w-[55px]"
                  />
                </div>
                <div className="lg:w-[90%]">
                  <h3 className="font-semibold text-[18px] lg:text-[22px] lg:mb-[8px]">
                    Safe and Easy Travels
                  </h3>
                  <p className="text-black/50 text-justify md:text-center lg:text-justify lg:w-[90%]">
                    It is a very safe and easy process that takes just a few
                    seconds. You fill out a simple application form that needs
                    to go through verification. You make payment once you
                    receive confirmation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-[8px] items-center text-center lg:text-start">
                <div className="lg:w-[10%]">
                  <img
                    src="images/payment-icon.svg"
                    alt="payment"
                    className="w-[55px]"
                  />
                </div>
                <div className="lg:w-[90%]">
                  <h3 className="font-semibold text-[18px] lg:text-[22px] lg:mb-[8px]">
                    Mode of Payments
                  </h3>
                  <p className="text-black/50 text-justify md:text-center lg:text-justify lg:w-[90%]">
                    After reserving your ticket, you can pay with Bank Transfer,
                    TeleBirr, M-Psea or PayPal based on your choice.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-[8px] items-center text-center lg:text-start">
                <div className="lg:w-[10%]">
                  <img
                    src="images/cashless-icon.svg"
                    alt="cashless"
                    className="w-[55px]"
                  />
                </div>
                <div className="lg:w-[90%]">
                  <h3 className="font-semibold text-[18px] lg:text-[22px] lg:mb-[8px]">
                    Cashless Transactions
                  </h3>
                  <p className="text-black/50 text-justify md:text-center lg:text-justify lg:w-[90%]">
                    The main aim is to have a digital transaction, which is a
                    cashless transaction that specifically requires no paper.
                    This contributes vastly to a cashless economy, advances
                    digitization and brings us one-step closer to making the
                    best use of technology.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-[8px] items-center text-center lg:text-start">
                <div className="lg:w-[10%]">
                  <img
                    src="images/customer.svg"
                    alt="customer"
                    className="w-[55px]"
                  />
                </div>
                <div className="lg:w-[90%]">
                  <h3 className="font-semibold text-[18px] lg:text-[22px] lg:mb-[8px]">
                    24/7 Customer Support
                  </h3>
                  <p className="text-black/50 text-justify md:text-center lg:text-justify lg:w-[90%]">
                    You can book travel tickets anytime, anywhere. An online
                    booking system allows you to receive booking 24 hours a day.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[50%] hidden lg:flex justify-center">
              <img
                src="images/bus5.png"
                alt="features-img"
                className="w-[616px] object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex  bg-[#078DD7]/10">
        <div className="p-[24px] lg:p-[60px] flex flex-col items-center  max-w-[1440px] mx-auto">
          <div className="mb-[16px] lg:mb-[32px]">
            <h2 className="font-bold text-[24px] lg:text-[38px]">
              Meet The Team
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-[16px] lg:justify-between w-full">
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-center">
                <img
                  src="images/aakash.png"
                  alt=""
                  className="w-[220px] lg:w-[250px]"
                />
              </div>
              <div className="text-center">
                <p className="text-[18px] font-semibold">Aakash Kumar Sah</p>
                <p className="text-black/50">UI/UX</p>
                <p className="text-black/50">& QA</p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-center">
                <img
                  src="images/nikil.png"
                  alt=""
                  className="w-[220px] lg:w-[250px]"
                />
              </div>
              <div className="text-center">
                <p className="text-[18px] font-semibold">Nikil Bhasima</p>
                <p className="text-black/50">Team Lead</p>
                <p className="text-black/50">& Fullstack</p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-center">
                <img
                  src="images/saliv.png"
                  alt=""
                  className="w-[220px] lg:w-[250px]"
                />
              </div>
              <div className="text-center">
                <p className="text-[18px] font-semibold">Saliv Maharjan</p>
                <p className="text-black/50">Frontend</p>
                <p className="text-black/50">& UI/UX</p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-center">
                <img
                  src="images/darshan.png"
                  alt=""
                  className="w-[220px] lg:w-[250px]"
                />
              </div>
              <div className="text-center">
                <p className="text-[18px] font-semibold">
                  Sudarshan Biswokarma
                </p>
                <p className="text-black/50">Backend</p>
                <p className="text-black/50">& QA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
