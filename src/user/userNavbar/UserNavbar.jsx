import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "../../component/PrimaryButton";
import SecondaryButton from "../../component/SecondaryButton";
import { mainNav } from "../../utils/navContent";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

function UserNavbar() {
  const [showNav, setShowNav] = useState(false);
  const { success } = useSelector((state) => state.auth);
  console.log("value of success", success);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/authenticate/login");
  };

  const navigateRegistration = () => {
    navigate("/authenticate/register");
  };

  return (
    <nav className="relative bg-secondary flex items-center justify-between p-[8px] md:px-[16px] lg:px-[32px] shadow-md">
      <img
        className="w-[115px] rounded-[100px]"
        src="/images/pngLogo.png"
        alt="bus yatra logo"
      />

      {/* nav links are here */}
      <div
        className={`
    fixed top-0 right-0 h-screen w-[250px] bg-secondary z-[1000] 
    flex flex-col gap-[2rem] pt-[8px] px-[16px] 
    w-fit shadow-xl
    transform transition-transform duration-500 ease-in-out
    ${showNav ? "translate-x-0" : "translate-x-full"}
    md:static md:h-auto md:w-auto md:flex-row md:items-center md:bg-transparent md:translate-x-0 md:shadow-none
  `}
      >
        <div className="shake ml-auto   w-fit  transition-all ease-in duration-300">
          <RxCross2
            className="md:hidden text-[40px] text-primary"
            onClick={() => {
              setShowNav(false);
            }}
          />
        </div>

        <div className="flex flex-col gap-[1rem] md:flex-row md:gap-[10px] lg:gap-[2rem]">
          {mainNav
            .filter((item) => success || item.linkName !== "My Trip")
            .map((data, index) => {
              return (
                <NavLink
                  key={index}
                  to={data.to}
                  className={({ isActive }) =>
                    `shake text-primary ${isActive && "font-bold"}`
                  }
                >
                  {data.linkName}
                </NavLink>
              );
            })}
        </div>

        {!success ? (
          <div className="flex gap-[1rem] lg:gap[2rem]">
            <PrimaryButton
              name="Sign In"
              width={true}
              changeBackground={true}
              showBorder={true}
              handleSubmit={navigateLogin}
            />
            <SecondaryButton
              name="Sign Up"
              width={true}
              changeBackground={true}
              showBorder={true}
              handleSubmit={navigateRegistration}
            />
          </div>
        ) : (
          <div className="bg-[yellow] h-[4rem] w-[4rem] rounded-full"></div>
        )}
      </div>

      {/* hamburger button */}
      <IoMdMenu
        className={`shake ${
          showNav ? "hidden" : "flex"
        } text-[40px] text-primary md:hidden`}
        onClick={() => {
          setShowNav(true);
        }}
      />
    </nav>
  );
}

export default UserNavbar;
