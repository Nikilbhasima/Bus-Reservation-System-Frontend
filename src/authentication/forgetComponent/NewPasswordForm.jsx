import React, { useState } from "react";
import PasswordFieldComponent from "../../component/PasswordFieldComponent";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../redux/optSlice/OtpThunks";
import { toast } from "react-toastify";

function NewPasswordForm({
  setShowUpdatePassword,
  setShowEmail,
  mainEmail,
  hideForgetPassword,
  setLoading,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const [password, setPassword] = useState({
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.password1 === password.password2) {
      const data = { email: mainEmail, password: password.password1 };
      try {
        setLoading(true);
        const response = await dispatch(updatePassword(data));
        if (response.meta.requestStatus === "fulfilled") {
          toast.success("password change successfull");
          setShowUpdatePassword(false);
          setShowEmail(true);
          hideForgetPassword();
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-[24px] mb-[8px]">Update Password</h2>
      <form className="flex flex-col gap-[16px] " onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="bg-[#078DD7] font-semibold w-full text-[white] py-[12px] rounded-[10px]"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default NewPasswordForm;
