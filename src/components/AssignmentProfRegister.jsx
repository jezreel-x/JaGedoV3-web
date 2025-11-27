import { useState } from "react";
import AdminSideNav from "../components/Navigation/AdminSideNav";

const builders = [
  {
    bid: "B-ID",
    // date: " date",
    category: "Category",
    level: "Senior",
    firstName: "First name",
    lastName: "Last name",
    // nationalID: "National ID",
    phone: "Phone No",
    email: "Email",
    // county: "County",
    // subcounty: "Subcounty",
  },
  {
    id: "P-001",
    // date: `February 12 2025 3:48 PM`,
    category: "Architect",
    level: "Senior",

    firstName: "John",
    lastName: "Doe",
    // nationalID: "30604460",
    phone: "072122000",
    email: "edwin@gmail.com",
    // county: "Nairobi",
    // subcounty: "Westlands",
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    managedBy: "",
  });
  const jobSkill = "Architect"; // Set job skill from Job Details

  // Filter builders to only include those with the matching skill
  const filteredBuilders = builders
    .slice(1)
    .filter((builder) => builder.category === jobSkill);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex h-screen bg-white">
      <AdminSideNav />
      <div className="flex-1 flex flex-col transition-all duration-300 relative">
        {/* Search + Filters */}
        <div className="p-4 flex justify-end">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Filters
          </button>
        </div>

        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm p-4 overflow-x-auto">
          {/* Register Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700">Register</h2>
            <button className="flex items-center gap-2 border border-gray-200 text-gray-600 text-sm px-3 py-1.5 rounded hover:bg-gray-50">
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
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              Search User Details
            </button>
          </div>
          {/* Table - Filtered Builders */}
          <div className="overflow-x-auto ml-34">
            {" "}
            {/* Adjusted margin to reduce distance from sidebar */}
            <table className="w-full bg-white text-md">
              <thead className="bg-gray-100 text-gray-600">
                <tr className="border-b border-gray-100">
                  {Object.keys(builders[0]).map((header, index) => (
                    <th
                      key={index}
                      className="p-4 text-left font-semibold whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredBuilders.map((builder, index) => (
                  <tr key={index}>
                    {Object.values(builder).map((value, i) => (
                      <td key={i} className="p-8 text-gray-800">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>Rows per page:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border rounded px-2 py-1"
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
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-gray-300 rounded disabled:opacity-50"
              >
                {/* Left Arrow */}
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
              <span>Page 1{rowsPerPage} of {filteredBuilders.length}</span>
            </div>
          </div>
          {/* Filter Drawer */}
          {isFilterOpen && (
            <div className="absolute top-0 right-0 h-full w-64 bg-white border-l shadow-lg z-50 p-4">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => updateFilter("category", e.target.value)}
                  className="w-full border p-2 rounded"
                >
                  <option value="">All</option>
                  {[
                    "Fundi",
                    "Machinery",
                    "Contractor",
                    "Custom Product",
                    "Professional",
                    "Design",
                    "Electrician",
                    "Hardware",
                  ].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => updateFilter("type", e.target.value)}
                  className="w-full border p-2 rounded"
                >
                  <option value="">All</option>
                  {["Job", "Order"].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Managed By
                </label>
                <select
                  value={filters.managedBy}
                  onChange={(e) => updateFilter("managedBy", e.target.value)}
                  className="w-full border p-2 rounded"
                >
                  <option value="">All</option>
                  {["Self", "JaGedo"].map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-full"
              >
                Close Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentScreen;
