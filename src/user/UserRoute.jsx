import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import AboutUsPage from "./aboutUsPage/AboutUsPage";
import ContactUsPage from "./contactUsPage/ContactUsPage";
import MyTrip from "./myTrip.jsx/MyTrip";
import Authentication from "../authentication/Authentication";
import OAuth2RedirectHandler from "../oauth2/OAuth2RedirectHandler";
import UserProfile from "./userProfile/UserProfile";
import EditProfile from "./editProfile/EditProfile";
import Booking from "./bookTicket/Booking";
import BrowseBus from "./bookTicket/BrowseBus";
import ViewBusSeat from "./bookTicket/ViewBusSeat";
import PaymentSuccess from "./paymentStatus/PaymentSuccess";
import PaymentFailed from "./paymentStatus/PaymentFailed";

function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book" element={<Booking />}>
        <Route index element={<BrowseBus />} />
        <Route path="browse/:rideDetail" element={<BrowseBus />} />
        <Route
          path="viewBusSeat/:busId/:travelDate"
          element={<ViewBusSeat />}
        />
      </Route>
      <Route path="/myTrip" element={<MyTrip />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/contactUs" element={<ContactUsPage />} />
      <Route path="/authenticate/:condition" element={<Authentication />} />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="*" element={<HomePage />} />
      <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/payment/failure" element={<PaymentFailed />} />
    </Routes>
  );
}

export default UserRoute;
