import React, { useState } from "react";
import PasswordFieldComponent from "../../component/PasswordFieldComponent";

function NewPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState({
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div>
      <h2 className="font-semibold text-[24px] mb-[8px]">Update Password</h2>
      <form className="flex flex-col gap-[16px]">
        <PasswordFieldComponent
          label="Enter Password"
          name="password1"
          value={password.password1}
          onChange={handleChange}
          visible={showPassword}
          toggleVisible={() => setShowPassword((prev) => !prev)}
        />
        <PasswordFieldComponent
          label="Confirm Password"
          name="password2"
          value={password.password2}
          onChange={handleChange}
          visible={showPassword}
          toggleVisible={() => setShowPassword((prev) => !prev)}
        />
        <button className="bg-[#078DD7] font-semibold w-full text-[white] py-[12px] rounded-[10px]">
          Update
        </button>
      </form>
    </div>
  );
}

export default NewPasswordForm;
