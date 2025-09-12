// Create /src/components/OAuth2RedirectHandler.js
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OAuth2RedirectHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("jwt_token", token);
      navigate("/");
    } else {
      navigate("/authenticate/login");
    }
  }, []);

  return <div>Processing login...</div>;
};

export default OAuth2RedirectHandler;
