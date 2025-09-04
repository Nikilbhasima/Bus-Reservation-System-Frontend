import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const RegistrationPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  const [errors, setErrors] = useState({
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
      alert("Success");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="flex gap-4 shadow-xl rounded-xl overflow-hidden">
        <div
          className="w-[520px] hidden lg:block"
          style={{ background: `url("form-banner.png")` }}
        >
          <div className="h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-[64px] font-bold">BUS YATRA</h1>
            <p className="mt-2 text-[16px]">
              Booking Made Simple, Journeys <br /> Made Memorable
            </p>
          </div>
        </div>
        <div className="flex flex-col p-[32px]">
          <div className="flex items-center gap-8 text-center mb-[16px]">
            <NavLink to={`/login`}>
              <IoMdArrowRoundBack size={22} />
            </NavLink>
            <h2 className="text-[40px] font-medium">CREATE ACCOUNT</h2>
          </div>
          <div className="my-[16px]">
            <TextField
              id="outlined-controlled"
              label="Email"
              name="email"
              variant="outlined"
              className="w-[340px] lg:w-[410px]"
              value={data.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </div>
          <div className="form-field  my-[16px]">
            <TextField
              id="outlined-controlled"
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              className="w-[340px] lg:w-[410px]"
              value={data.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </div>
          <div className="form-field  my-[16px]">
            <TextField
              id="outlined-controlled"
              type="password"
              name="cPassword"
              label="Confirm Password"
              variant="outlined"
              className="w-[340px] lg:w-[410px]"
              value={data.cPassword}
              onChange={handleChange}
              error={Boolean(errors.cPassword)}
              helperText={errors.cPassword}
            />
          </div>
          <div className="mt-[16px]">
            <PrimaryButton name="REGISTER" handleSubmit={handleSubmit} />
          </div>
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
    </div>
  );
};

export default RegistrationPage;
