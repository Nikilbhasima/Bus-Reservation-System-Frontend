import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";
import { NavLink, useNavigate } from "react-router-dom";
import TextFieldComponent from "../component/TextFieldComponent";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice/AuthThunks";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    cPassword: "",
    role: "ROLE_USER",
  });

  const [errors, setErrors] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let validateError = { email: "", password: "", cPassword: "" };

    if (data.username.trim() === "") {
      validateError.username = "Username is Required";
      hasError = true;
    }
    if (data.phoneNumber.trim() === "") {
      validateError.phoneNumber = "Phone Number is Required";
      hasError = true;
    }
    if (data.email.trim() === "") {
      validateError.email = "Email is Required";
      hasError = true;
    }
    if (data.password.trim() === "") {
      validateError.password = "Password is Required";
      hasError = true;
    }
    if (data.cPassword.trim() === "") {
      validateError.cPassword = "Confirm Password is Required";
      hasError = true;
    } else if (data.password !== data.cPassword) {
      validateError.cPassword = "Passwords do not match";
      hasError = true;
    }

    setErrors(validateError);

    if (!hasError) {
      registerUsers(data);
    }
  };

  const registerUsers = async (data) => {
    try {
      const userData = {
        username: data?.username,
        phoneNumber: data?.phoneNumber,
        email: data?.email,
        password: data?.password,
        role: "ROLE_USER",
      };
      const response = await dispatch(registerUser(userData));
      if (response.meta.requestStatus === "fulfilled") {
        setData({
          username: "",
          phoneNumber: "",
          email: "",
          password: "",
          cPassword: "",
          role: "ROLE_USER",
        });
        toast.success("🎉 Registration Successful!");
        navigate("/authenticate/login");
      } else {
        toast.error(response?.payload?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4  w-full shadow-md">
      <div className="flex flex-col p-[32px] w-full">
        <div className="flex items-center gap-8 text-center mb-[12px]">
          <NavLink to={`/authenticate/login`}>
            <IoMdArrowRoundBack size={22} />
          </NavLink>
          <h2 className="text-[32px] font-medium mx-auto">CREATE ACCOUNT</h2>
        </div>
        {/* registration form */}
        <form className="grid gap-[14px]">
          <div>
            <TextFieldComponent
              id="username"
              label="Username"
              name="username"
              value={data.username}
              onChange={handleChange}
              error={Boolean(errors.username)}
              helperText={errors.username}
              type="text"
            />
          </div>
          <div>
            <TextFieldComponent
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber}
              type="text"
            />
          </div>
          <div>
            <TextFieldComponent
              id="email"
              label="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              type="text"
            />
          </div>
          <div className="form-field  ">
            <TextFieldComponent
              id="password"
              type="password"
              name="password"
              label="Password"
              value={data.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </div>
          <div className="form-field  ">
            <TextFieldComponent
              id="confrimPassword"
              type="password"
              name="cPassword"
              label="Confirm Password"
              value={data.cPassword}
              onChange={handleChange}
              error={Boolean(errors.cPassword)}
              helperText={errors.cPassword}
            />
          </div>
          <div>
            <PrimaryButton name="REGISTER" handleSubmit={handleSubmit} />
          </div>
        </form>

        <div className="flex justify-center items-center gap-4 my-[18px] opacity-30">
          <div className="h-[3px] bg-[black] w-[40%]"></div>
          OR
          <div className="h-[3px] bg-[black] w-[40%]"></div>
        </div>
        <div>
          <SecondaryButton name="Continue with Google" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
