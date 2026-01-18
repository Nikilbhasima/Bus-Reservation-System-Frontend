import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllOwner } from "../../redux/agencySlice/driverSlice/DriverThunks";
import { toast } from "react-toastify";
import { deleteOwner } from "../../redux/authSlice/AuthThunks";

function AgencyLandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ownerList, setOwnerList] = useState([]);

  useEffect(() => {
    getAllOwnerData();
  }, []);

  const getAllOwnerData = async () => {
    try {
      const response = await dispatch(getAllOwner());
      if (response.meta.requestStatus === "fulfilled") {
        setOwnerList(response.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (ownerId) => {
    const response = await dispatch(deleteOwner(ownerId));
    if (response.meta.requestStatus === "fulfilled") {
      setOwnerList((pre) => pre.filter((data) => data.id != ownerId));
      toast.success("Owner deleted successfully");
    } else {
      toast.error("Fail to Delete");
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-[2rem] font-semibold">Owner List</h2>
        <button
          onClick={() => navigate("owner/0")}
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
          {ownerList.map((data, index) => (
            <tr
              key={index}
              className="transition-all ease-in duration-300 hover:shadow-lg"
            >
              <td className="py-[20px] font-light text-[12px] md:text-[16px] lg:text-[16px] flex ">
                <img
                  src={
                    data?.image === null ? "/images/profile.png" : data?.image
                  }
                  className="h-[4rem] m-auto rounded-[50%] object-fit object-center"
                  alt="user profile"
                />
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
                {data?.username}
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                {data?.email}
              </td>
              <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                {data?.phoneNumber}
              </td>
              <td className="py-[8px]">
                <div className="flex justify-center gap-[8px]">
                  {data?.travelAgency === null ? (
                    <button
                      onClick={() => navigate(`agencyProfile/add/${data?.id}`)}
                      className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in"
                    >
                      <MdAddCircleOutline />
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        navigate(
                          `agencyProfile/edit/${data?.travelAgency?.travel_agency_id}`
                        )
                      }
                      className="bg-[#078DD7] text-[white] text-[20px] px-[16px] py-[8px] rounded-[10px] font-light hover:-translate-y-1 duration-300 transition-all ease-in "
                    >
                      <FiEdit />
                    </button>
                  )}
                </div>
              </td>
              <td className="pr-[8px] py-[8px]">
                <div className="flex justify-center gap-[8px]">
                  <button
                    onClick={() => navigate(`owner/${data?.id}`)}
                    className="bg-[#078DD7] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => deleteUser(data?.id)}
                    className="bg-[#DC2626] text-white text-[20px] px-[16px] py-[8px] rounded-[10px] hover:-translate-y-1 transition-all duration-300 ease-in"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgencyLandingPage;
