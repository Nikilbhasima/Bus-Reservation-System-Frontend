import React, { useState } from "react";
import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";
import { NavLink, useNavigate } from "react-router-dom";
import TextFieldComponent from "../component/TextFieldComponent";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice/AuthThunks";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    emailOrMobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailOrMobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let validateError = { emailOrMobile: "", password: "" };

    if (data.emailOrMobile.trim() === "") {
      validateError.emailOrMobile = "Email is Required";
      hasError = true;
    }
    if (data.password.trim() === "") {
      validateError.password = "Password is Required";
      hasError = true;
    }

    setErrors(validateError);

    if (!hasError) {
      console.log(data);
      login(data);
    }
  };

  const login = async (data) => {
    try {
      const response = await dispatch(loginUser(data));
      console.log(response.payload);
      if (response.meta.requestStatus === "fulfilled") {
        toast.success("Login Successful!");
        navigate("/");
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOauth = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="flex flex-col p-[32px]">
      <div className="flex flex-col text-center mb-[16px]">
        <h2 className="text-[40px] font-medium">WELCOME BACK</h2>
        <p className="text-[16px]">
          Don't have an account?
          <NavLink to={`/authenticate/register`}>
            <span className="text-[#078DD7]">Sign up</span>
          </NavLink>
        </p>
      </div>
      <form className="grid gap-[16px]">
        <div>
          <TextFieldComponent
            id="emailorPhone"
            label="Email"
            name="emailOrMobile"
            type="text"
            value={data.emailOrMobile}
            onChange={handleChange}
            error={Boolean(errors.emailOrMobile)}
            helperText={errors.emailOrMobile}
          />
        </div>
        <div className="form-field ">
          <TextFieldComponent
            id="password"
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
        <div className="text-right mt-[2px] mb-[8px] opacity-30">
          Forgot your password?
        </div>
        <div>
          <PrimaryButton
            name="LOGIN"
            handleSubmit={handleSubmit}
            showBorder={true}
          />
        </div>
      </form>

      <div className="flex justify-center items-center gap-4 my-[18px] opacity-30">
        <div className="h-[3px] bg-[black] w-[40%]"></div>
        OR
        <div className="h-[3px] bg-[black] w-[40%]"></div>
      </div>
      <div>
        <SecondaryButton
          name="Continue with Google"
          showBorder={true}
          changeBackground={true}
          handleSubmit={handleOauth}
          icon={<FcGoogle className="text-[20px]" />}
        />
      </div>
    </div>
  );
};

export default LoginPage;
