import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import AboutUsPage from "./aboutUsPage/AboutUsPage";
import ContactUsPage from "./contactUsPage/ContactUsPage";
import BookTicket from "./bookTicket/BookTicket";
import MyTrip from "./myTrip.jsx/MyTrip";
import Authentication from "../authentication/Authentication";
import OAuth2RedirectHandler from "../oauth2/OAuth2RedirectHandler";

function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookTicket" element={<BookTicket />} />
      <Route path="/myTrip" element={<MyTrip />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/contactUs" element={<ContactUsPage />} />
      <Route path="/authenticate/:condition" element={<Authentication />} />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default UserRoute;
