import { NavLink } from "react-router-dom";
import PrimaryButton from "../../component/PrimaryButton";
import SecondaryButton from "../../component/SecondaryButton";

function UserNavbar() {
  return (
    <nav className="bg-primary py-[12px] px-[32px] flex items-center">
      <img
        className="w-[115px] rounded-[100px]"
        src="./images/busYatraLogo.png"
        alt="bus yatra logo"
      />
      <div className=" flex w-full">
        <div className="m-auto lg:flex lg:gap-[32px] ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bookTicket">Book Ticket</NavLink>
          <NavLink to="/myTrip">My Trip</NavLink>
          <NavLink to="/aboutUs">About Us</NavLink>
          <NavLink to="/contactUs">Contact Us</NavLink>
        </div>
        <div className="flex lg:gap-[32px]">
          <NavLink to={`/login`}>
            <PrimaryButton name="Login" width="fit-content" />
          </NavLink>

          <NavLink to={`/register`}>
            <SecondaryButton name="Register" width={true} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
