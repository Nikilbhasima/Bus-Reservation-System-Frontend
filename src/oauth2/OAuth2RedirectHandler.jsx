// Create /src/components/OAuth2RedirectHandler.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setLoginSuccess } from "../redux/authSlice/AuthSlice";

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log("i was called once");

  useEffect(() => {
    const token = searchParams.get("token");
    console.log("this is success", token);
    if (token) {
      localStorage.setItem("JWT_TOKEN", token);
      console.log("setting token:", token);
      dispatch(setLoginSuccess());
      navigate("/");
    } else {
      navigate("/authenticate/login");
    }
  }, []);

  return <div>Processing login...</div>;
};

export default OAuth2RedirectHandler;
