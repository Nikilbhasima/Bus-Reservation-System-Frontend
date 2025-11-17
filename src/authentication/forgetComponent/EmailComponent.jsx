import { CiMail } from "react-icons/ci";
import TextFieldComponent from "../../component/TextFieldComponent";
import { useState } from "react";
import TextFieldWithIconCompoment from "../../component/TextFieldWithIconCompoment";

function EmailComponent() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    console.log("email:", email);
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
      console.log("calling api");
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
