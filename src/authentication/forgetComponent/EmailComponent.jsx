import { CiMail } from "react-icons/ci";
import TextFieldComponent from "../../component/TextFieldComponent";
import { useState } from "react";
import TextFieldWithIconCompoment from "../../component/TextFieldWithIconCompoment";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../redux/optSlice/OtpThunks";
import { toast } from "react-toastify";

function EmailComponent({ setShowEmail, setShowOtp, setMainEmail }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (email.trim() === "") {
      setEmailError("Email can't be null");
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address");
        hasError = true;
      }
    }
    if (!hasError) {
      try {
        setMainEmail(email);
        const response = await dispatch(sendOtp(email));
        if (response.meta.requestStatus === "fulfilled") {
          if (response.payload.success) {
          }
          setShowEmail(false);
          setShowOtp(true);
          toast.success("Mail has been send to your mail:" + email);
        } else {
          toast.error("Failed To Send OTP please try again");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="bg-[#FFFFFF] w-full">
      <h2 className="font-semibold text-[24px]">Forget Password</h2>
      <form
        className="w-full mt-[16px] flex flex-col gap-[16px]"
        onSubmit={handleFormSubmit}
      >
        <div className="relative">
          <TextFieldWithIconCompoment
            label={"Email"}
            value={email}
            name={email}
            onChange={handleChange}
          />
          <CiMail className="text-[20px] absolute top-[15px] left-[10px]" />
        </div>

        <button
          type="submit"
          className="bg-[#078DD7] w-full text-[white] py-[12px] rounded-[10px]"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default EmailComponent;
