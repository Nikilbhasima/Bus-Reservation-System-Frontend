import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import CheckboxList from "./CheckboxList";

const FilterSidebar = ({
  selectedTimes,
  setSelectedTimes,
  selectedBusTypes,
  setSelectedBusTypes,
  selectedProviders,
  setSelectedProviders,
  setBusName,
}) => {
  const toggleSelection = (list, setList, item) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  return (
    <div className="w-full max-w-sm p-4">
      <div className="border border-[#078DD7] rounded-[8px] p-4 mb-4 flex flex-col gap-[12px]">
        <p>Search By Bus Name</p>
        <input
          name="busName"
          onChange={(e) => setBusName(e.target.value)}
          type="text"
          placeholder="Bus Name"
          className="border border-[#078DD7] rounded-[10px] px-[20px] py-[12px] outline-none"
        />
      </div>
      <FilterSection title="Service Provider" showAll>
        <CheckboxList
          options={[
            "Deurali Yatayat",
            "ArghaBhagwati Yatayat",
            "Shiv Shakti AC",
            "Angel Deluxe",
          ]}
          selected={selectedProviders}
          onChange={(item) =>
            toggleSelection(selectedProviders, setSelectedProviders, item)
          }
        />
      </FilterSection>

      <FilterSection title="Bus Type">
        <CheckboxList
          options={[
            "AC",
            "NON_AC",
            "DELUX",
            "SLEEPER",
            "SOFA_SEATER",
            "TOURIST",
          ]}
          selected={selectedBusTypes}
          onChange={(item) =>
            toggleSelection(selectedBusTypes, setSelectedBusTypes, item)
          }
        />
      </FilterSection>

      <FilterSection title="Departure Time">
        <CheckboxList
          options={["Morning", "Afternoon", "Evening", "Noon"]}
          selected={selectedTimes}
          onChange={(item) =>
            toggleSelection(selectedTimes, setSelectedTimes, item)
          }
          columns={3}
        />
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
