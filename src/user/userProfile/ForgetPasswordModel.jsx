import { Box, Modal } from "@mui/material";
import PasswordFieldComponent from "../../component/PasswordFieldComponent";
import { useState } from "react";
import { GrShieldSecurity } from "react-icons/gr";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#FFFFFF",
  border: "1px solid #078DD7",
  p: "24px",
  borderRadius: "10px",
};

function ForgetPasswordModel({ showModel, setShowModal }) {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("hello everyone");
    let hasError = false;

    let validateError = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    if (data.currentPassword.trim() === "") {
      validateError.currentPassword = "Current password is Required";
      hasError = true;
    }
    if (data.newPassword.trim() === "") {
      validateError.newPassword = "New Password is Required";
      hasError = true;
    }
    if (data.confirmPassword.trim() === "") {
      validateError.confirmPassword = "Confirm Password is Required";
      hasError = true;
    }
    setErrors(validateError);
    if (data.newPassword != data.confirmPassword) {
      validateError.confirmPassword = "New Password didn't match";
      hasError = true;
    }
    if (!hasError) {
      console.log("form submited successfully");
    }
  };
  return (
    <>
      <Modal open={showModel}>
        <Box sx={{ ...style }}>
          <div className="flex flex-col gap-[16px] font-semibold">
            <div className="flex items-center gap-[8px]">
              <div className="bg-[#078DD7] rounded-[10px] p-[12px]">
                <GrShieldSecurity className="text-[22px] text-[white]" />
              </div>

              <div>
                <h2 className="text-[22px]">Password Change</h2>
                <p className="font-light text-[12px]">
                  Secure your account with a new password
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmitForm}
              className="flex flex-col gap-[24px] "
            >
              {/* input field */}
              <div className="flex flex-col gap-[16px]">
                <PasswordFieldComponent
                  id="currentPassword"
                  label="Current Password"
                  name="currentPassword"
                  type="text"
                  value={data.currentPassword}
                  onChange={handleChange}
                  visible={showPassword}
                  toggleVisible={() => setShowPassword((prev) => !prev)}
                  error={Boolean(errors.currentPassword)}
                  helperText={errors.currentPassword}
                />
                <PasswordFieldComponent
                  id="currentPassword"
                  label="New Password"
                  name="newPassword"
                  type="text"
                  value={data.newPassword}
                  onChange={handleChange}
                  visible={showPassword}
                  toggleVisible={() => setShowPassword((prev) => !prev)}
                  error={Boolean(errors.newPassword)}
                  helperText={errors.newPassword}
                />
                <PasswordFieldComponent
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="text"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  visible={showPassword}
                  toggleVisible={() => setShowPassword((prev) => !prev)}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                />
              </div>
              {/* button */}
              <div className="flex gap-[8px]">
                <button
                  type="submit"
                  className=" bg-[#078DD7] rounded-[10px] px-[16px] py-[12px] text-white 
              hover:-translate-y-1 duration-300 transition-all ease-in"
                >
                  Update Password
                </button>
                <button
                  onClick={() => {
                    setData({
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    });
                    setShowModal(!showModel);
                  }}
                  className=" bg-[#E53935] rounded-[10px] px-[16px] py-[12px] text-white 
              hover:-translate-y-1 duration-300 transition-all ease-in"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ForgetPasswordModel;
