import { useState } from "react";
import AdminSideNav from "../components/Navigation/AdminSideNav";

const builders = [
  {
    id: "B-ID",
    class: "Class",
    skill: "Skill",
    name: "Name",
    phone: "Phone No",
    email: "Email",
  },
  {
    id: "C-001",
    class: "6",
    skill: "Mechanical",
    name: "Jagedo Limited",
    phone: "072122000",
    email: "edwin@gmail.com",
  },
  {
    id: "C-002",
    class: "6",
    skill: "Mechanical",
    name: "Jagedo Limited",
    phone: "072122000",
    email: "edwin@gmail.com",
  },
  {
    id: "C-003",
    class: "6",
    skill: "Mechanical",
    name: "Jagedo Limited",
    phone: "072122000",
    email: "edwin@gmail.com",
  },
  {
    id: "C-004",
    class: "6",
    skill: "Mechanical",
    name: "Jagedo Limited",
    phone: "072122000",
    email: "edwin@gmail.com",
  },
  {
    id: "C-005",
    class: "6",
    skill: "Mechanical",
    name: "Jagedo Limited",
    phone: "072122000",
    email: "edwin@gmail.com",
  },
];

const AssignmentScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    managedBy: "",
  });

  const jobSkill = "Mechanical";

  const filteredBuilders = builders
    .slice(1)
    .filter((builder) => builder.skill === jobSkill);

  const paginatedBuilders = filteredBuilders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex min-h-screen bg-white">
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

        {/* Header */}
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

        {/* Responsive Table */}
        <div className="overflow-x-auto ml-34">
            {" "}
            <table className="w-full bg-white text-md">
         
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                {Object.keys(builders[0]).map((key, index) => (
                  <th key={index} className="px-16 text-left font-semibold whitespace-nowrap">
                    {key.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedBuilders.length > 0 ? (
                paginatedBuilders.map((builder, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-50 hover:bg-gray-100 transition"
                  >
                    {Object.keys(builders[0]).map((key, i) => (
                      <td key={i} className="px-6 py-4 text-gray-800">
                        {builder[key] || "-"}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={Object.keys(builders[0]).length}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1"
            >
              {[5, 10, 20].map((size) => (
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
              {Math.ceil(filteredBuilders.length / rowsPerPage) || 1}
            </span>
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
                  <option key={option}>{option}</option>
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
                {["Job", "Order"].map((option) => (
                  <option key={option}>{option}</option>
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
                {["Self", "JaGedo"].map((option) => (
                  <option key={option}>{option}</option>
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
