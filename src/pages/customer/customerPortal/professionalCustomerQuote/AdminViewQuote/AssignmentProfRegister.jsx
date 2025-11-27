
import { lazy, Suspense, useState } from "react";
const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar")
);

import QuoteNavBar2 from "./QuoteNavBar2";

const builders = [
  {
    bid: "B-ID",
    category: "Category",
    level: "Senior",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone No",
    email: "Email",
  },
  {
    id: "P-001",
    category: "Architect",
    level: "Senior",
    firstName: "John",
    lastName: "Doe",
    phone: "072122000",
    email: "edwin@gmail.com",
  },
  {
    id: "P-002",
    category: "Architect",
    level: "Senior",
    firstName: "Marvin",
    lastName: "Kimeu",
    phone: "071819120",
    email: "marvin@gmail.com",
  },
  {
    id: "P-003",
    category: "Architect",
    level: "Senior",
    firstName: "John",
    lastName: "Kamau",
    phone: "0733123456",
    email: "john@gmail.com",
  },
  {
    id: "P-004",
    category: "Electrician",
    level: "Senior",
    firstName: "Dennis",
    lastName: "Omondi",
    phone: "0748123499",
    email: "dennis@gmail.com",
  },
  {
    id: "P-005",
    category: "Architect",
    level: "Senior",
    firstName: "Samson",
    lastName: "Mutua",
    phone: "0700112233",
    email: "samson@gmail.com",
  },
];

const AssignmentScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState();
 

  const jobSkill = "Architect";
  const filteredBuilders = builders
    .slice(1)
    .filter((builder) => builder.category === jobSkill);

 

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <div className="pt-24">
        <QuoteNavBar2 />

        <div className="flex h-screen bg-white">
          <div className="flex-1 flex flex-col transition-all duration-300 relative">
          
           {/* Table Section */}
<div className="w-full max-w-screen-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Bidders</h2>

  <div className="overflow-x-auto">
    <table className="w-full table-auto text-base border border-gray-300">
      <thead className="bg-gray-100 text-gray-700">
        <tr className="border-b border-gray-300">
          {Object.keys(builders[0]).map((header, index) => (
            <th
              key={index}
              className="px-6 py-4 text-left font-semibold whitespace-nowrap"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredBuilders.map((builder, index) => (
          <tr
            key={index}
            className="border-b border-gray-100 hover:bg-gray-50"
          >
            {Object.values(builder).map((value, i) => (
              <td
                key={i}
                className="px-6 py-4 text-gray-800 whitespace-nowrap"
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
    <div className="flex items-center gap-2">
      <span>Rows per page:</span>
      <select
        value={rowsPerPage}
        onChange={(e) => {
          setRowsPerPage(Number(e.target.value));
          setCurrentPage(1);
        }}
        className="border rounded px-3 py-1"
      >
        {[5, 10, 20, 30].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 border border-gray-300 rounded disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <span>
        Page {currentPage} of{" "}
        {Math.ceil(filteredBuilders.length / (rowsPerPage || 5))}
      </span>
    </div>
  </div>
</div>




          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentScreen;
