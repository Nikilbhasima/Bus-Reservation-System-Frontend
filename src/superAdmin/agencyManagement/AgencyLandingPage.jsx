import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AgencyLandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-[2rem] font-semibold">Owner List</h2>
        <button
          onClick={() => navigate("/owner")}
          className="flex items-center  text-[1rem] bg-[#078DD7] text-white rounded-[10px] py-[8px] px-[12px] hover:-translate-y-1 transition-all duration-300 ease-in"
        >
          <MdAddCircleOutline className="mr-[8px]" />
          Add Owner
        </button>
      </div>

      {/* table part */}
      <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
        <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#078DD7] sticky top-0 text-white">
          <tr className="rounded-[12px] ">
            <th className="pl-[8px] font-medium ">Photo</th>
            <th className="py-[8px] font-medium">User</th>
            <th className="py-[8px] font-medium">Email</th>
            <th className="py-[8px] font-medium">Phone Number</th>
            <th className="pr-[8px] font-medium">Agency</th>
            <th className="pr-[8px] font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="transition-all ease-in duration-300 hover:shadow-lg">
            <td className="py-[20px] font-light text-[12px] md:text-[16px] lg:text-[16px] flex ">
              <img
                src="/images/profile.png"
                className="h-[4rem] m-auto rounded-[100%] object-fit object-center"
                alt="user profile"
              />
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
              nikil
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
              nikil@gmail.com
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
              9808029931
            </td>
            <td className="py-[8px]">
              <div className="flex justify-center gap-[8px]">
                {true ? (
                  <button className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                    <FiEdit />
                  </button>
                ) : (
                  <button className="bg-[#078DD7] text-[white] text-[20px] px-[16px] py-[8px] rounded-[10px] font-light hover:-translate-y-1 duration-300 transition-all ease-in ">
                    <MdAddCircleOutline />
                  </button>
                )}
              </div>
            </td>
            <td className="pr-[8px] py-[8px]">
              <div className="flex justify-center gap-[8px]">
                <button className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                  <FiEdit />
                </button>
                <button className="bg-[#DC2626] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </td>
          </tr>
          <tr className="transition-all ease-in duration-300 hover:shadow-lg">
            <td className="py-[20px] font-light text-[12px] md:text-[16px] lg:text-[16px] flex ">
              <img
                src="/images/profile.png"
                className="h-[4rem] m-auto rounded-[100%] object-fit object-center"
                alt="user profile"
              />
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
              nikil
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
              nikil@gmail.com
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
              9808029931
            </td>
            <td className="py-[8px]">
              <div className="flex justify-center gap-[8px]">
                {true ? (
                  <button className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                    <FiEdit />
                  </button>
                ) : (
                  <button className="bg-[#078DD7] text-[white] text-[20px] px-[16px] py-[8px] rounded-[10px] font-light hover:-translate-y-1 duration-300 transition-all ease-in ">
                    <MdAddCircleOutline />
                  </button>
                )}
              </div>
            </td>
            <td className="pr-[8px] py-[8px]">
              <div className="flex justify-center gap-[8px]">
                <button className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                  <FiEdit />
                </button>
                <button className="bg-[#DC2626] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </td>
          </tr>
          <tr className="transition-all ease-in duration-300 hover:shadow-lg">
            <td className="py-[20px] font-light text-[12px] md:text-[16px] lg:text-[16px] flex ">
              <img
                src="/images/profile.png"
                className="h-[4rem] m-auto rounded-[100%] object-fit object-center"
                alt="user profile"
              />
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
              nikil
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
              nikil@gmail.com
            </td>
            <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
              9808029931
            </td>
            <td className="py-[8px]">
              <div className="flex justify-center gap-[8px]">
                {true ? (
                  <button className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                    <FiEdit />
                  </button>
                ) : (
                  <button className="bg-[#078DD7] text-[white] text-[20px] px-[16px] py-[8px] rounded-[10px] font-light hover:-translate-y-1 duration-300 transition-all ease-in ">
                    <MdAddCircleOutline />
                  </button>
                )}
              </div>
            </td>
            <td className="pr-[8px] py-[8px]">
              <div className="flex justify-center gap-[8px]">
                <button className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                  <FiEdit />
                </button>
                <button className="bg-[#DC2626] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AgencyLandingPage;
