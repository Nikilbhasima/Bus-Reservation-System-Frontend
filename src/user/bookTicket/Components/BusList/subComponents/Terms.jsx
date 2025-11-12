import React from "react";

const Terms = () => {
  return (
    <div className="p-[16px]">
      {/* Introduction */}
      <div className="font-medium mb-[16px]">
        Bus Yatra offers refunds for cancellations made up to 14 hours before
        departure, unless the operator has a seperate cancellation policy in
        place.
      </div>

      {/* Cancel Conditions */}
      <div>
        <span className="font-medium mb-[8px]">
          Charges for cancellation will be applied as follows:
        </span>
        <div className="px-[24px] py-[4px]">
          <ul className="list-disc">
            <li>Cancel before 48 hours of departure: no cancellation fee.</li>
            <li>
              Cancel between 24 and 48 hours before departure: 25% cancellation
              fee.
            </li>
            <li>
              Cancel 14 to 24 hours before departure: 50% cancellation fee.
            </li>
          </ul>
        </div>
        <div className="mt-[8px]">
          <span className="font-medium">Note: </span>
          Charges incurred for payment gateways like VISA, MasterCard, eSewa,
          Khalti, and other similar services will not be refunded.
        </div>
      </div>

      {/* Travel Policy */}
      <div className="mt-[16px]">
        <div className="font-medium">Travel Policy</div>
        <ul className="list-disc px-[24px] py-[4px]">
          <li>Luggage charges are not included in the bus ticket.</li>
          <li>Full fare will be charged for children above 5 years of age.</li>
          <li>Baby seats are not available on our vehicles.</li>
          <li>Pets are not allowed on board our vehicles.</li>
        </ul>
      </div>

      {/* Responsibility as a Passenger */}
      <div className="mt-[16px]">
        <div className="font-medium">Your Responsibilities as a Passenger</div>
        <ul className="list-disc px-[24px] py-[4px]">
          <li>
            Keep your ticket with you for the whole journey. If you lose it, you
            will need to buy a new one.
          </li>
          <li>
            Be at the boarding point 30 minutes before departure. If you're late
            and miss the bus, Bus Yatra cannot and will not be held responsible.
          </li>
          <li>
            Check your ticket for the correct AM or PM time. No refunds will be
            provided if you miss the bus because of such confusion.
          </li>
          <li>
            Passengers must follow the terms and conditions of the bus
            company/association.
          </li>
        </ul>
      </div>

      {/* Services That Cant be Provided */}
      <div className="mt-[16px]">
        <div className="font-medium">What Our Service Can and Can't Do</div>
        <ul className="list-disc px-[24px] py-[4px]">
          <li>
            Passengers are pre-informed that the facilities claimed by the bus
            company might not be available due to technical issues.
          </li>
          <li>
            Bus services might be canceled or rescheduled because of things like
            bad weather, strikes, or other incidents. If this happens, we will
            inform you.
          </li>
          <li>
            If a bus is canceled due to these reasons, our usual cancellation
            policy does not apply. We will provide you another option if you are
            interested.
          </li>
          <li>
            If a bus is rescheduled for similar reasons, you can cancel your
            ticket for a full refund, minus payment gateway charges.
          </li>
          <li>
            Buses may be merged by the operator due to operational reasons such
            as technical issues, natural calamities, or other unavoidable
            events. As Bus Yatra operates solely as an aggregator, such
            decisions are beyond our control.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
