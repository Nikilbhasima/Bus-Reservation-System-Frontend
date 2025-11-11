import React, { useState } from "react";
import FilterSection from "./FilterSection";
import CheckboxList from "./CheckboxList";

const FilterSidebar = () => {
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedBusTypes, setSelectedBusTypes] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const toggleSelection = (list, setList, item) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  return (
    <div className="w-full max-w-sm p-4">
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
          options={["AC", "Non AC", "Delux", "Sleeper"]}
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
