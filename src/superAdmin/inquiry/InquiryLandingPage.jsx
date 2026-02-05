import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";

import {
  getAllMessage,
  updateStatus,
} from "../../redux/userSlice/contactSlice/ContactThunks";
import { toast } from "react-toastify";

function InquiryLandingPage() {
  const dispatch = useDispatch();
  const [queryList, setQueryList] = useState([]);
  const [toggle, setToggle] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const response = await dispatch(getAllMessage());
    if (response.meta.requestStatus === "fulfilled") {
      console.log("data:", response.payload);
      setQueryList(response.payload);
    }
  };
  const handleStatus = async (id) => {
    const response = await dispatch(updateStatus(id));
    console.log(response);
    if (response.meta.requestStatus === "fulfilled") {
      toast.success(`Status updated successfully`);
      setQueryList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: "SOLVED" } : item,
        ),
      );
    }
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[2rem] font-semibold">User Query</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search name or email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-[2px] rounded-[10px] px-[10px] py-[6px] w-[16rem]"
          />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border-[2px] rounded-[10px] w-[12rem] px-[8px]"
          >
            <option value="ALL">All</option>
            <option value="business">Business</option>
            <option value="help">Help</option>
          </select>
        </div>
      </div>

      {/* table part */}
      <table className="w-full h-[10rem]  text-center border-separate border-spacing-y-[16px]  ">
        <thead className="text-[12px] md:text-[16px] lg:text-[22px] bg-[#078DD7] sticky top-0 text-white">
          <tr className="rounded-[12px] ">
            <th className="pl-[8px] font-medium ">SN</th>
            <th className="py-[8px] font-medium">Name</th>
            <th className="py-[8px] font-medium">Email</th>
            <th className="py-[8px] font-medium">Phone Number</th>
            <th className="pr-[8px] font-medium">Category</th>
            <th className="pr-[8px] font-medium">Message</th>
            <th className="pr-[8px] font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="">
          {queryList
            .filter((data) => {
              // Category filter
              const categoryMatch =
                selectedCategory === "ALL" ||
                data?.category === selectedCategory;

              // Search filter (name OR email)
              const searchMatch =
                data?.number
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                data?.email?.toLowerCase().includes(searchText.toLowerCase());

              return categoryMatch && searchMatch;
            })
            .map((data, index) => (
              <tr
                key={index}
                className="transition-all ease-in duration-300 hover:shadow-lg"
              >
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px] ">
                  {data?.id}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.name}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.email}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.number}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.category}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  {data?.message}
                </td>
                <td className="py-[8px] font-light text-[12px] md:text-[16px] lg:text-[16px]">
                  <div className="flex justify-center items-center">
                    <div
                      onClick={() => handleStatus(data?.id)}
                      className={`w-[60px] my-auto h-[30px] flex items-center rounded-full cursor-pointer p-1 transition-all duration-300 
      ${data?.status === "SOLVED" ? "bg-green-500" : "bg-gray-400"}`}
                    >
                      <div
                        className={`flex bg-white w-[24px] h-[24px] rounded-full shadow-md transform transition-all duration-300
        ${data?.status === "SOLVED" ? "translate-x-[30px]" : "translate-x-0"}`}
                      >
                        <span className="text-[10px] m-auto text-[#078DD7] font-semibold">
                          {data?.status === "SOLVED" && <SiTicktick />}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default InquiryLandingPage;
