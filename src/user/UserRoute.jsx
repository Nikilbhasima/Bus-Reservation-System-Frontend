import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import AboutUsPage from "./aboutUsPage/AboutUsPage";
import ContactUsPage from "./contactUsPage/ContactUsPage";
import BookTicket from "./bookTicket/BookTicket";
import MyTrip from "./myTrip.jsx/MyTrip";

function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookTicket" element={<BookTicket />} />
      <Route path="/myTrip" element={<MyTrip />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/contactUs" element={<ContactUsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default UserRoute;
