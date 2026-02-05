import TextFieldComponent from "../../component/TextFieldComponent";
import PrimaryButton from "../../component/PrimaryButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { sendMessage } from "../../redux/userSlice/contactSlice/ContactThunks";
import { toast } from "react-toastify";

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
  const dispatch = useDispatch();

  const [message, setMessage] = useState({
    name: "",
    number: "",
    email: "",
    category: "",
    message: "",
    status: "PENDING",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageSubmit = async (e) => {
    // e.preventDefault();
    try {
      console.log(message);
      const response = await dispatch(sendMessage(message));

      console.log(response.payload);

      if (response.meta.requestStatus == "fulfilled") {
        setMessage({
          name: "",
          number: "",
          email: "",
          category: "",
          message: "",
          status: "PENDING",
        });
        toast.success("Message Sent");
      } else {
        toast.error("Messege Send Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="p-[32px] lg:p-[60px] flex flex-col md:flex-row gap-[32px] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] md:w-[50%]">
          <div>
            <h2 className="font-semibold text-[40px] ">
              Why you should join us?
            </h2>
          </div>
          {contentData.map((data, index) => (
            <div
              key={index}
              className="p-[12px] font-['Inter'] flex gap-[16px] items-center rounded-[10px] shadow-[2px_4px_6px_0px_rgba(59,_130,_246,_0.5)]"
            >
              <div className="bg-[#EEF4F6] rounded-[10px] p-[10px]">
                <img src={data?.image} alt="icon" className="w-[25px]" />
              </div>
              <div className="flex flex-col gap-[4px] sm:gap-[4px] ">
                <h2 className="font-bold text-[18px] lg:text-[22px] fontFamilyOne">
                  {data?.heading}
                </h2>
                <p className="text-black/50 text-[14px] max-w-[397px] fontFamilyOne">
                  {data?.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-[50%]">
          <div className="p-[20px] flex flex-col gap-[16px] shadow-[2px_4px_6px_0px_rgba(59,_130,_246,_0.5)] rounded-[12px]">
            <h2 className="font-bold text-[#078DD7] text-[32px] ">
              Get Started Today
            </h2>
            <p className="text-black/50 text-[16px] fontFamilyOne">
              Ready to experience the future of bus travel? Contact us and join
              thousands of satisfied customers.
            </p>
            <div className="flex flex-col gap-[16px] font-['Inter']">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 fontFamilyOne">
                  Full Name
                </label>
                <TextFieldComponent
                  type="text"
                  name="name"
                  value={message.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 fontFamilyOne">
                  Email
                </label>
                <TextFieldComponent
                  name="email"
                  value={message.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 fontFamilyOne">
                  Phone Number
                </label>
                <TextFieldComponent
                  name="number"
                  value={message.number}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 fontFamilyOne">
                  Inquiry Type
                </label>

                <select
                  className="fontFamilyOne"
                  name="category"
                  value={message.category}
                  onChange={handleChange}
                  style={{
                    border: "1px solid rgba(107, 114, 128, 0.5)",
                    padding: "12px 16px",
                    borderRadius: "6px",
                    width: "100%",
                    fontSize: "16px",
                    color: message.category ? "#000" : "#6B7280",
                  }}
                >
                  <option value="" disabled>
                    -- Select Inquiry Type --
                  </option>

                  <option value="help">Help & Support</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-semibold text-gray-700 mb-2 fontFamilyOne">
                  Your Message
                </label>
                <textarea
                  className="border border-gray-500/50 p-[8px] rounded-[6px] fontFamilyOne"
                  placeholder="Leave Your Message"
                  rows="5"
                  value={message.message}
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <div onClick={() => handleMessageSubmit()}>
                <PrimaryButton type="submit" name={"Submit Inquiry"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
