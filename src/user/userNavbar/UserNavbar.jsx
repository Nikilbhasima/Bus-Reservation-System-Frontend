import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "../../component/PrimaryButton";
import SecondaryButton from "../../component/SecondaryButton";
import { mainNav } from "../../utils/navContent";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../redux/authSlice/AuthThunks";
import { logout } from "../../redux/authSlice/AuthSlice";

const navList = [
  { name: "Profile", to: "/profile" },
  { name: "Edit", to: "/contactUs" },
  { name: "Setting", to: "/contactUs" },
  { name: "Logout", to: "/contactUs" },
];
function UserNavbar() {
  const dispatch = useDispatch();

  const [showNav, setShowNav] = useState(false);

  console.log("show nav state:", showNav);

  const { success } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(true);

  const [user, setUser] = useState({});

  const { jwt } = useSelector((state) => state.auth);

  const navigateLogin = () => {
    navigate("/authenticate/login");
  };

  const navigateRegistration = () => {
    navigate("/authenticate/register");
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await dispatch(getUserDetail());
      if (response.meta.requestStatus === "fulfilled") {
        console.log("it data comming:", response.payload);
        setUser(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="relative bg-primary flex items-center justify-between p-[8px] md:px-[16px] lg:px-[32px] top-0 sticky z-100 ">
      <div className="bg-white rounded-[100px] p-[5px]">
        <img
          className="w-[80px] rounded-[100px] flex items-center justify-center"
          src="/images/pngLogo.png"
          alt="bus yatra logo"
        />
      </div>

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
                    `shake ${showNav ? "text-primary" : "text-[white]"}  ${
                      isActive && "font-bold"
                    }`
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
          <div>
            {/* third nav */}
            <div className={showNav ? "hidden" : "block"}>
              <img
                src={user?.image || "/images/userImage.png"}
                className=" h-[4rem] w-[4rem] rounded-full object-cover"
                alt="userImage"
                onClick={() => setDropDown(!dropDown)}
                onError={(e) => {
                  e.target.src = "/images/userImage.png"; // Fallback on error
                }}
              />
              <ul
                role="menu"
                className={`absolute bg-[white] rounded-[10px]     shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top z-10 ${
                  dropDown
                    ? "opacity-0 scale-y-0 h-0 -translate-y-2 pointer-events-none"
                    : "opacity-100 scale-y-100 h-auto translate-y-2 pointer-events-auto"
                }`}
              >
                {navList.map((data, index) => (
                  <li
                    key={index}
                    className="px-[20px] py-[10px] hover:bg-[#078DD7] hover:text-[white] transition-all duration-250 ease-in "
                    onClick={() => {
                      if (data.name === "Logout") {
                        dispatch(logout());
                        navigate("/");
                      } else {
                        navigate(data?.to);
                      }
                    }}
                  >
                    {data.name}
                  </li>
                ))}
              </ul>
            </div>
            {/* second nav */}
            <div className={!showNav ? "hidden" : "flex flex-col gap-[1rem]"}>
              {navList.map((data, index) => (
                <NavLink
                  key={index}
                  to={data.to}
                  className={({ isActive }) =>
                    `shake text-primary ${isActive && "font-bold"}`
                  }
                >
                  {data.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* hamburger button */}
      <IoMdMenu
        className={`shake ${
          showNav ? "hidden" : "flex"
        } text-[40px] text-[white] md:hidden`}
        onClick={() => {
          setShowNav(true);
        }}
      />
    </nav>
  );
}

export default UserNavbar;
