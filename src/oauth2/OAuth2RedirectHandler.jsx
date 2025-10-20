// Create /src/components/OAuth2RedirectHandler.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setLoginSuccess } from "../redux/authSlice/AuthSlice";

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("JWT_TOKEN", token);
      dispatch(setLoginSuccess());
      navigate("/");
    } else {
      navigate("/authenticate/login");
    }
  }, []);

  return <div>Processing login...</div>;
};

export default OAuth2RedirectHandler;
