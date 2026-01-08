import { useParams } from "react-router-dom";
import { useState } from "react";
import FilterBox from "../component/FilterBox";
import SearchingBox from "../component/SearchingBox";


const FilterEvent = () => {
  const { id } = useParams();
  const [ monthYear, setMonthYear ] = useState({ month: null, year: null });

  const getMonthYear = (month , year  ) => {
    setMonthYear({ month, year });
  };

  return (
    <div className="text-black p-4">
      <h2 className="text-xl font-semibold">Filter Event</h2>
      {/* <p className="mb-2"> Filter ID : <strong> {id} </strong></p> */}
      <FilterBox getMonthYear={getMonthYear} />
      <SearchingBox monthYear={monthYear} />

    </div>
  );
};

export default FilterEvent;
