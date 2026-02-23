import { useEffect, useState } from "react";

const FilterBox = ({ getMonthYear }) => {
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const months = [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    const years = [2026, 2027];

    const updateMonthYear = (e) => {
        if (e) e.preventDefault();
        if (!selectedMonth || !selectedYear) return;
        getMonthYear(selectedMonth, selectedYear);
    };

    useEffect(() => {
        setSelectedMonth("");
        setSelectedYear("");
    }, []);

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-3xl mx-auto p-6">
            <p className="text-sm text-gray-500 mb-5">
                Select month and year to refine events
            </p>
            <form onSubmit={updateMonthYear} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                {/* Month */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Month</label>
                    <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Month</option>
                        {months.map((month,index) => <option key={index} value={month}>{month}</option>)}
                    </select>
                </div>

                {/* Year */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Year</label>
                    <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Year</option>
                        {years.map((year,index) => <option key={index} value={year}>{year}</option>)}
                    </select>
                </div>

                {/* Button */}
                <button type="submit"
                    className="h-[42px] bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                    disabled={!selectedMonth || !selectedYear}>
                    Apply Filter
                </button>
            </form>
        </div>
    );
};

export default FilterBox;











// import { useEffect, useState } from "react";

// const FilterBox = ({ getMonthYear }) => {
//     const [selectedMonth, setSelectedMonth] = useState("");
//     const [selectedYear, setSelectedYear] = useState("");

//     const months = [
//         "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//     ];

//     const years = [2026, 2027];

//     const handleMonthChange = (e) => {
//         setSelectedMonth(e.target.value);
//     };

//     const handleYearChange = (e) => {
//         setSelectedYear(e.target.value);
//     };

//     const updateMonthYear = (e) => {
//         e.preventDefault();
//         getMonthYear(selectedMonth, selectedYear);

//         // if (!selectedMonth || !selectedYear) return;
//         // getMonthYear(selectedMonth, selectedYear);
//     }

//     useEffect(() => {
//         const defaultMonth = "Jan";
//         const defaultYear = 2026;
//         setSelectedMonth(defaultMonth);
//         setSelectedYear(defaultYear);
//         getMonthYear(defaultMonth, defaultYear);
//     }, []);

//     return (
//         <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-3xl mx-auto p-6">

//             <p className="text-sm text-gray-500 mb-5">
//                 Select month and year to refine events
//             </p>

//             <form
//                 onSubmit={updateMonthYear}
//                 className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
//             >

//                 {/* Month */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-medium text-gray-700 mb-1">
//                         Month
//                     </label>

//                     <select
//                         value={selectedMonth}
//                         onChange={handleMonthChange}
//                         className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

//                         <option value="">Select Month</option>
//                         {months.map((month, index) => (
//                             <option key={index} value={month}>
//                                 {month}
//                             </option>
//                         ))}

//                     </select>
//                 </div>

//                 {/* Year */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-medium text-gray-700 mb-1">
//                         Year
//                     </label>
//                     <select
//                         value={selectedYear}
//                         onChange={handleYearChange}
//                         className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

//                         <option value="">Select Year</option>
//                         {years.map((year, index) => (
//                             <option key={index} value={year}>
//                                 {year}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Button */}
//                 <button
//                     type="submit"
//                     className="h-[42px] bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
//                     disabled={!selectedMonth || !selectedYear}>

//                     Apply Filter
//                 </button>

//             </form>
//         </div>
//     );
// };

// export default FilterBox;
