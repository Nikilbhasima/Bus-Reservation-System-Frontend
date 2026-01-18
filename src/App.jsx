import { ToastContainer } from "react-toastify";
import "./App.css";
import UserPage from "./user/UserPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { extractToken } from "./utils/ExtractRoleFromJwt";
import { setLoginSuccess } from "./redux/authSlice/AuthSlice";
import AgencyMain from "./admin/agency/AgencyMain";
import DriverLayout from "./driver/DriverLayout";
import LandingPage from "./superAdmin/landingPage/LandingPage";

const renderByRole = (role) => {
  if (role.includes("ROLE_ADMIN")) {
    return <LandingPage />;
  }

  if (role.includes("ROLE_OWNER")) {
    return <AgencyMain />;
  }

  if (role.includes("ROLE_BUS")) {
    return <DriverLayout />;
  }

  if (role.includes("ROLE_USER")) {
    return <UserPage />;
  }

  return <UserPage />; // fallback
};
const App = () => {
  const [role, setRole] = useState([]);
  const dispatch = useDispatch();
  const { jwt, user } = useSelector((state) => state.auth);
  const jwtFromLocal = localStorage.getItem("JWT_TOKEN");

  useEffect(() => {
    if (jwtFromLocal) {
      const extractedData = extractToken(jwtFromLocal);
      setRole(extractedData?.roles || []);
      console.log("extracted data:", extractedData);
      dispatch(setLoginSuccess());
    }
  }, [jwt, user, dispatch]);
  return (
    <>
      {!role || (role.length === 0 && <UserPage />)}
      {Array.isArray(role) && role.includes("ROLE_USER") && <UserPage />}
      {Array.isArray(role) && role.includes("ROLE_BUS") && <DriverLayout />}
      {Array.isArray(role) && role.includes("ROLE_OWNER") && <AgencyMain />}
      {Array.isArray(role) && role.includes("ROLE_ADMIN") && <LandingPage />}

      {/* {renderByRole(role)} */}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
