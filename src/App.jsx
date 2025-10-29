import { ToastContainer } from "react-toastify";
import "./App.css";
import UserPage from "./user/UserPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { extractToken } from "./utils/ExtractRoleFromJwt";
import { setLoginSuccess } from "./redux/authSlice/AuthSlice";
import AgencyMain from "./admin/agency/AgencyMain";

const App = () => {
  const [role, setRole] = useState([]);
  const dispatch = useDispatch();
  const { jwt } = useSelector((state) => state.auth);
  const jwtFromLocal = localStorage.getItem("JWT_TOKEN");

  useEffect(() => {
    if (jwtFromLocal) {
      const extractedData = extractToken(jwtFromLocal);
      setRole(extractedData?.roles || []);
      dispatch(setLoginSuccess());
    }
  }, [jwt]);
  return (
    <>
      <UserPage />
      {/* <AgencyMain /> */}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
